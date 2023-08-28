// 接口验证中间件

export default eventHandler(async (event) => {
    // console.log(event)

    const url = getRequestURL(event)
    // api接口才进行验证
    if (url.pathname.includes('/api/')) {
        const authSign = await useVerifySign(event)
        if (!authSign) {
            throw createError({ statusMessage: '签名错误', statusCode: 1001 })
        }
        const authToken = useVerifyToken(event)
        event.context.user = authToken as UserOptionItem
    }
})
