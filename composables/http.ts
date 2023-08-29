import { defu } from 'defu'
import type { NitroFetchRequest } from 'nitropack'
import type { UseFetchOptions } from '#app'

// import type { UseFetchOptions } from '#app'

type UseFetchType = typeof useFetch
type ReqOption = Parameters<UseFetchType>[1]
// type RequestDataType = '' | (() => void) | Record<string, any>
// type RequestDataType<T = Record<string, any>> = '' | { (): T } | T

export const useHttp = <T = any>(url: string, data?: RequestDataType, opt?: ReqOption) => {
    const headers = useRequestHeaders(['cookie']) // as HeadersInit
    //   console.log('headers :>> ', headers)
    //   console.log('headers :>> ', headers.cookie)
    const runtimeConfig = useRuntimeConfig()
    //   console.log('runtimeConfig :>> ', runtimeConfig)
    //   useFetch(url, { headers })

    const options = opt || {}

    //   if (headers.cookie)
    //     options.headers.cookie = headers.cookie

    //   const d = data?.()
    //   console.log('d :>> ', d)

    //   if (data)
    //     options.body = data

    // 设置请求参数
    if (data) {
        if (typeof data == 'function' && typeof data() == 'object') {
            options.body = data()
        }
        if (typeof data == 'object') {
            options.body = data
        }
    }

    if (!options.baseURL) {
        options.baseURL = runtimeConfig.public.apiBase || ''
    }
    // console.log('options.baseURL :>> ', options.baseURL);
    // 发送请求出错
    options.onRequestError = () => {
        console.error('请求出错，请重试！')
    }
    // 发送请求出错
    options.onResponseError = ({ response }) => {
        switch (response.status) {
            case 400:
                console.error('参数错误')
                break
            case 401:
                console.error('没有访问权限')
                //   router.push(`/login?callback=${route.path}`)
                break
            case 403:
                console.error('服务器拒绝访问')
                break
            case 404:
                console.error('请求地址错误')
                break
            case 500:
                console.error('服务器故障')
                break
            default:
                console.error('网络连接故障')
                break
        }
    }

    return useFetch<T>(url, options as any)
}

// const { data: users, pending, refresh, error } = await http<{ name: string }>('/a')

export function useCustomFetch<T>(url: NitroFetchRequest, options: UseFetchOptions<T> = {}) {
    const userAuth = useCookie('token')
    const config = useRuntimeConfig()

    const time = Date.now().toString()
    const sign = setSignRule(config.public.secret, time)

    const defaults: UseFetchOptions<T> = {
        // baseURL: config.public.apiBase ?? 'https://api.nuxtjs.dev',
        // cache request
        key: url as string,

        // set user token if connected
        // headers: userAuth.value
        //     ? { Authorization: `Bearer ${userAuth.value}` }
        //     : {},

        headers: {
            'x-sign': `${sign}-${time}`,
        },

        onResponse(_ctx) {
            // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
        },

        onResponseError(_ctx) {
            // throw new myBusinessError()
        },
    }

    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults)

    return useFetch(url, params)
}
