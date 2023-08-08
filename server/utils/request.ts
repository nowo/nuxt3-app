import type { H3Event } from 'h3'
import { defu } from 'defu'
import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack'

// import type { FetchOptions } from '#app'

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

/**
 * 服务器端请求接口,默认请求头增加sign处理
 * @param url
 * @param options
 * @returns
 */
export function useServerFetch<T = any>(url: NitroFetchRequest, options: NitroFetchOptions<T> = {}) {
    // const userAuth = useCookie('token')
    const config = useRuntimeConfig()

    const time = Date.now().toString()
    const sign = setSignRule(config.public.secret, time)

    const defaults: NitroFetchOptions<T> = {
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

    return $fetch(url, params)
}
