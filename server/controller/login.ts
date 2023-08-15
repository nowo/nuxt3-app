import { defineEventHandler } from 'h3'
import { setEncryptPassword } from '~/server/utils/request'

/**
 * 登录
 */
export const loginSign = () => defineEventHandler(async (event) => {
    console.log('1111', event.context.params)
    interface LoginDataType {
        account: string
        password: string
    }
    // const method = getMethod(event)
    // const query = getQuery(event) as unknown as LoginDataType
    // const body = await readBody<LoginDataType>(event)
    // const param = method === 'GET' ? query : body

    // 接口校验
    const authSign = await useVerifySign(event)
    if (!authSign) return { msg: '签名错误' }

    // 获取参数
    const param = await getEventParams<LoginDataType>(event)
    console.log('param-----', param)

    if (!param.account) return { msg: '请输入登录账号' }
    if (!param.password) return { msg: '请输入登录密码' }

    const user = await event.context.prisma.user.findUnique({
        where: {
            account: param.account,
            // password: setEncryptPassword(param.password),
        },
    })
    console.log('user', user)

    if (!user) {
        return { msg: '用户不存在' }
    } else if (user.password === setEncryptPassword(param.password)) {
        return { code: 200, data: user }
    } else {
        return { msg: '密码错误' }
    }
})

/**
 * 注册
 */
export const register = () => defineEventHandler(async (event) => {
    interface LoginDataType {
        account: string
        password: string
        username: string
    }
    // const method = getMethod(event)
    // const query = getQuery(event) as unknown as LoginDataType
    // const body = await readBody<LoginDataType>(event)
    // const param = method === 'GET' ? query : body

    // 接口校验
    const authSign = await useVerifySign(event)
    if (!authSign) return { msg: '签名错误' }

    // 获取参数
    const param = await getEventParams<LoginDataType>(event)
    console.log('param-----', param)

    if (!param.username) return { msg: '请输入用户名' }

    if (!param.account) return { msg: '请输入登录账号' }
    if (!param.password) return { msg: '请输入登录密码' }

    const user = await event.context.prisma.user.create({
        data: {
            username: param.username,
            account: param.account,
            password: setEncryptPassword(param.password),
        },
    })
    console.log('user', user)

    if (!user) {
        return { msg: '用户不存在' }
    } else {
        return { code: 200, data: user }
    }
})
