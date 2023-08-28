// 接口错误返回信息
export const ResponseMessage: Record<string, { code: number, msg: string, data?: any }> = {
    success: { code: 200, msg: 'success' },
    sign: { code: 1001, msg: '签名错误' },
    token: { code: 1002, msg: 'token失效' }
}