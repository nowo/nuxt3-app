import { createRouter, defineEventHandler, useBase } from 'h3'
import { getSystemInfo, setSystemInfo } from '~/server/controller/system'

const router = createRouter()

/**
 * 获取系统信息
 */
router.use('/info', defineEventHandler(async (event) => {
    return getSystemInfo(event)
}))

/**
 * 获取底部导航
 */
router.use('/edit', defineEventHandler(async (event) => {
    return setSystemInfo(event)
}))

export default useBase('/api/system', router.handler)
