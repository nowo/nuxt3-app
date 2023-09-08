import { createRouter, defineEventHandler, useBase } from 'h3'
import { getBannerList, getMenuList, getSystemInfo } from '~/server/controller/page'
import { getInfo } from '~/server/controller/other'

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

/**
 * 获取轮播图
 */
router.use('/get_banner', defineEventHandler(async (event) => {
    return getBannerList(event)
}))

/**
 * 获取友情链接
 */
router.use('/get_links', defineEventHandler(async (event) => {
    return getBannerList(event)
}))

/**
 * 获取关于我们
 */
router.use('/about', defineEventHandler(async (event) => {
    return getInfo(event)
}))

export default useBase('/api/page', router.handler)
