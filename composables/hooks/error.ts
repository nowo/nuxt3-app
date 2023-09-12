export const showErrorPage = () => {
    throw createError({ statusCode: 404, message: '页面不存在' })
}
