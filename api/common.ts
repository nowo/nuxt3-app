export const CommonApi = {
  getList: (data: RequestDataType<{ page: number; pageSize: string }>) => useHttp<{ data: { total: number } }>('/api/v1/news/list', data, { method: 'post' }),
}
