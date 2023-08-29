import { createRouter, defineEventHandler, useBase } from 'h3'
import { getAdminList, setAdminCreate, setAdminDelete, setAdminUpdate, setLoginSign, setPasswordUpdate, setRegister } from '~/server/controller/admin'
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
    if (res.data) {
        const token = createToken(res.data)
        return {
            code: 200,
            data: {
                id: res.data.id,
                username: res.data!.username,
                account: res.data!.account,
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

export default useBase('/api/admin', router.handler)
