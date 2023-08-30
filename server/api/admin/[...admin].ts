import { createRouter, defineEventHandler, useBase } from 'h3'
import { getAdminList, getLoginInfo, setAdminCreate, setAdminDelete, setAdminUpdate, setLoginSign, setPasswordUpdate, setRegister } from '~/server/controller/admin'
import { createToken } from '~/server/utils/token'

const router = createRouter()

/**
 * 获取用户列表
 */
router.use('/get_list', defineEventHandler(async (event) => {
    return getAdminList(event)
}))

/**
 * 添加用户
 */
router.use('/add', defineEventHandler(async (event) => {
    return setAdminCreate(event)
}))

/**
 * 修改用户
 */
router.use('/edit', defineEventHandler(async (event) => {
    return setAdminUpdate(event)
}))

/**
 * 删除用户
 */
router.use('/delete', defineEventHandler(async (event) => {
    return setAdminDelete(event)
}))

// 登录相关 ///////////////////////////////////

/**
 * 登录
 */
router.use('/login', defineEventHandler(async (event) => {
    const res = await setLoginSign(event)
    const user = res.data
    if (user) {
        const token = createToken(user)
        return {
            code: 200,
            data: {
                id: user.id,
                // username: user!.username,
                // account: user!.account,
                token,
            },
        }
    } else {
        return res
    }
}))

/**
 * 注册
 */
router.use('/signup', defineEventHandler(async (event) => {
    return setRegister(event)
}))

/**
 * 修改密码
 */
router.use('/edit_password', defineEventHandler(async (event) => {
    return setPasswordUpdate(event)
}))

/**
 * 获取登录用户信息
 */
router.use('/info', defineEventHandler(async (event) => {
    return getLoginInfo(event)
}))

export default useBase('/api/admin', router.handler)
