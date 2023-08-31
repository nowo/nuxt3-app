import { createRouter, defineEventHandler, useBase } from 'h3'
import { getInfo, update } from '~/server/controller/other'

const router = createRouter()

/**
 * 获取系统信息
 */
router.use('/info', defineEventHandler(async (event) => {
    return getInfo(event)
}))

/**
 * 获取底部导航
 */
router.use('/edit', defineEventHandler(async (event) => {
    return update(event)
}))

export default useBase('/api/other', router.handler)
