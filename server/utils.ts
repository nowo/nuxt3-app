import type { H3Event } from 'h3'

export const getEventParams = async <T = any>(event: H3Event) => {
  const method = getMethod(event)
  const query = getQuery(event) as T
  const body = await readBody<T>(event)
  const param = method === 'GET' ? query : body
  return param
}
