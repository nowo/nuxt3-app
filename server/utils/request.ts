import type { H3Event } from 'h3'
import { defu } from 'defu'
import type { NitroFetchRequest } from 'nitropack'
import Crypto from 'crypto-js'

const { MD5 } = Crypto

// import type { FetchOptions } from '#app'

/**
 * 签名加密 加密规则： 密钥+拼接字符串进行MD5加密
 * @param {string} secret  待加密的密钥
 * @param {string} str 用于混入密钥的字符串（一般用时间戳）
 * @returns 加密后的字符串
 * @example
 * ```javascript
 * setSignRule('0eb948223412170b5', new Date().getTime().toString())    // 0eb948223412170b50de9bb356d39e2b
 * ```
 */
export const setSignRule = (secret: string, str: string) => {
    // 第一次加密 （密钥+拼接字符串）进行MD5加密
    const key = secret + str
    const s = MD5(key).toString()
    // 第二次加密 (加密一次后的密钥取前面20个字符+拼接字符串取前面10个字符)进行MD5加密
    const key1 = s.substring(0, 20) + str.substring(0, 10)
    const s1 = MD5(key1).toString()

    return s1
}

/**
 * 获取接口参数方法，整合get、post请求类型统一获取参数
 * @param event defineEventHandler方法里的event参数
 * @returns
 */
export const getEventParams = async <T = any>(event: H3Event) => {
    const method = getMethod(event)
    const query = getQuery(event) as unknown as T
    const body = await readBody<T>(event)
    const param = method === 'GET' ? query : body

    return param
}

/**
 * 签名验证
 * @param event defineEventHandler方法里的event参数
 * @returns
 */
export const useVerifySign = async (event: H3Event) => {
    const headers = getHeaders(event)
    // 获取请求头里的x-sign
    let signTimestamp = headers['x-sign']

    if (!signTimestamp) {
        // 请求头没有x-sign时，获取params或body里的sign参数
        const signParams = await getEventParams<{ sign: string }>(event)
        if (!signParams.sign) return undefined

        signTimestamp = signParams.sign
    }

    const arr = signTimestamp.split('-')

    const sign = arr[0]
    const time = arr[1]
    const signs = setSignRule(sign, time)
    if (signs === signTimestamp) {
        return { sign, time }
    } else {
        return undefined
    }
}

type $FetchType = typeof $fetch
export type ReqOptions = Parameters<$FetchType>[1]
/**
 * 服务器端请求接口,默认请求头增加sign处理
 * @param url
 * @param options
 * @returns
 */
export function useServerFetch<T = any>(url: NitroFetchRequest, options: ReqOptions = {}) {
    // const userAuth = useCookie('token')
    const config = useRuntimeConfig()

    const time = Date.now().toString()
    const sign = setSignRule(config.public.secret, time)

    const defaults: ReqOptions = {
        // baseURL: config.public.apiBase ?? 'https://api.nuxtjs.dev',
        // cache request
        // key: url as string,

        // set user token if connected
        headers: {
            'x-sign': `${sign}-${time}`,
        },

        // onResponse(_ctx) {
        //     // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
        // },

        // onResponseError(_ctx) {
        //     // throw new myBusinessError()
        // },
    }

    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults)

    return $fetch<T>(url, params)
}
