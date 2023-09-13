import { createRouter, defineEventHandler, useBase } from 'h3'
import { getAboutInfo, getBannerList, getMenuList, getNewsInfo, getProductInfo, getSystemInfo } from '~/server/controller/page'
import { getList } from '~/server/controller/news'
import { getList as getProductList } from '~/server/controller/product'

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
 * 获取关于我们、联系我们数据
 */
router.use('/about', defineEventHandler(async (event) => {
    return getAboutInfo(event)
}))

/**
 * 获取产品列表
 */
router.use('/goods', defineEventHandler(async (event) => {
    // TODO 获取商品
    return getAboutInfo(event)
}))

/**
 * 获取新闻
 */
router.use('/news', defineEventHandler(async (event) => {
    return getList(event)
}))
/**
 * 获取新闻
 */
router.use('/news/detail', defineEventHandler(async (event) => {
    return getNewsInfo(event)
}))

/**
 * 获取商品
 */
router.use('/product', defineEventHandler(async (event) => {
    return getProductList(event)
}))
/**
 * 获取商品
 */
router.use('/product/detail', defineEventHandler(async (event) => {
    return getProductInfo(event)
}))

export default useBase('/api/page', router.handler)
