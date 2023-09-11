/**
 * vue路由获取Param类型的参数   /goods/list/1
 * @param name 名称 （必须）
 * @param init 默认值
 * @returns
 */
export function useRouteParam<T = string>(name: string, init = '' as T) {
    const route = useRoute()
    return computed(() => (route.params as any)[name] as T ?? init)
}
/**
 * vue路由获取query参数（获取？后面的参数）   /goods/list?name=foo&price=10
 * @param name 名称 （必须）
 * @param init
 * @returns
 */
export function useRouteQuery<T = string>(name: string, init = '' as T) {
    const route = useRoute()
    return computed(() => route.query[name] as T ?? init)
}
