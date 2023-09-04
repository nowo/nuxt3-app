import { createRouter, defineEventHandler, useBase } from 'h3'
import { getMenuList, getSystemInfo } from '~/server/controller/page'

const router = createRouter()

/**
 * 获取系统信息
 */
router.use('/get_system', defineEventHandler(async (event) => {
    return getSystemInfo(event)
}))

/**
 * 获取菜单
 */
router.use('/get_menu', defineEventHandler(async (event) => {
    return getMenuList(event)
}))

export default useBase('/api/page', router.handler)
