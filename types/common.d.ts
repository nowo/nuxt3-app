declare interface ListPage {
    isPage?: 0 | 1 // 是否进行分页
    page?: number // 当前页
    pageSize?: number // 每页显示数量
}

/**
 * useHttp 请求接口数据类型
 */
type RequestDataType<T = Record<string, any>> = '' | { (): T } | T
// type RequestDataType<T = any> = '' | { (): T } | T
