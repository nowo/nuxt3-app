import { createRouter, defineEventHandler, useBase } from 'h3'
import { getMenuList, setMenuCreate, setMenuDelete, setMenuUpdate } from '~/server/controller/menu'

const router = createRouter()

/**
 * 获取菜单列表
 */
router.use('/get_list', defineEventHandler(async (event) => {
    return getMenuList(event)
}))

/**
 * 添加菜单
 */
router.use('/add', defineEventHandler(async (event) => {
    return setMenuCreate(event)
}))

/**
 * 修改菜单
 */
router.use('/edit', defineEventHandler(async (event) => {
    return setMenuUpdate(event)
}))

/**
 * 删除菜单
 */
router.use('/delete', defineEventHandler(async (event) => {
    return setMenuDelete(event)
}))

export default useBase('/api/menu', router.handler)
