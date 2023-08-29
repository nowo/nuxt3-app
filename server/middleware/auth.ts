// 接口验证中间件

export default eventHandler(async (event) => {
    // console.log(event)

    // const Origin = ['http://localhost:9005/']
    // const requestOrigin = getRequestHeaders(event).origin || ''
    // if (Origin.includes(requestOrigin)) {
    //     setResponseHeaders(event, {
    //         'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //         'Access-Control-Allow-Origin': requestOrigin,
    //         // 'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Credentials': 'true',
    //         'Access-Control-Allow-Headers': '*',
    //         'Access-Control-Expose-Headers': '*',
    //     })
    // }

    const url = getRequestURL(event)
    // api接口才进行验证
    if (url.pathname.includes('/api/')) {
        const authSign = await useVerifySign(event)
        if (!authSign) {
            throw createError({ message: '签名错误', statusCode: 1001 })
        }
        const authToken = useVerifyToken(event)
        event.context.user = authToken as UserOptionItem
    }
})
