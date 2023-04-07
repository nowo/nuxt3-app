export const CommonApi = {
  getList: (data: RequestDataType<{ page: number; pageSize: string }>) => useHttp<{ data: { total: number } }>('/api/mall/get_wechat_url', data, { method: 'post' }),
}
