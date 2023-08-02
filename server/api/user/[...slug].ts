import { createRouter, defineEventHandler, useBase } from 'h3'

const router = createRouter()

/**
 * 获取轮播图、活动广告
 */
router.use('/add', defineEventHandler(async (event) => {
    console.log('111 :>> ', 111)
    const method = getMethod(event)

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
 * 获取底部导航
 */
router.use('/get_list', defineEventHandler(async (event) => {
    return 1
}))

export default useBase('/api/user', router.handler)
