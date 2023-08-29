import { createRouter, defineEventHandler, useBase } from 'h3'

const router = createRouter()

/**
 * 添加用户
 */
router.use('/add', defineEventHandler(async (event) => {
    console.log('111 :>> ', 111)
    const method = event.method

    const query = getQuery(event)
    const body = await readBody(event)
    const data = method === 'GET' ? query : body
    const user = await event.context.prisma.user.create({
        data,
    })
    console.log(user)
    return user
}))

/**
 * 获取轮播图、活动广告
 */
router.use('/edit', defineEventHandler(async (event) => {
    console.log('111 :>> ', 111)

    const method = event.method

    const query = getQuery(event)
    const body = await readBody(event)
    const data = method === 'GET' ? query : body
    const user = await event.context.prisma.user.create({
        data,
    })
    console.log(user)
    return user
}))

/**
 * 获取用户列表
 */
router.use('/get_list', defineEventHandler(async (event) => {
    return 1
}))

export default useBase('/api/user', router.handler)
