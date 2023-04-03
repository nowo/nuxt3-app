

/**
 * useHttp 请求接口数据类型
 */
type RequestDataType<T = Record<string, any>> = '' | { (): T } | T
// type RequestDataType<T = any> = '' | { (): T } | T