import { createRouter, defineEventHandler, useBase } from 'h3'
import { del, getList, insert, update } from '~/server/controller/product'

const router = createRouter()

/**
 * 获取菜单列表
 */
router.use('/get_list', defineEventHandler(async (event) => {
    return getList(event)
}))

/**
 * 添加菜单
 */
router.use('/add', defineEventHandler(async (event) => {
    return insert(event)
}))

/**
 * 修改菜单
 */
router.use('/edit', defineEventHandler(async (event) => {
    return update(event)
}))

/**
 * 删除菜单
 */
router.use('/delete', defineEventHandler(async (event) => {
    return del(event)
}))

export default useBase('/api/product', router.handler)
