import type { H3Event } from 'h3'
import { ResponseMessage } from '~/config/message'
import { setEncryptPassword } from '~/server/utils/request'

/**
 * 登录
 */
export const setLoginSign = async (event: H3Event) => {
    // 获取参数
    const param = await getEventParams<AdminLoginDataType>(event)

    if (!param?.account) return { msg: '请输入登录账号' }
    if (!param.password) return { msg: '请输入登录密码' }

    const user = await event.context.prisma.admin.findUnique({
        where: {
            status: 1, // 1：启用
            account: param.account,
            // password: setEncryptPassword(param.password),
        },
    })
    // console.log('user', user)

    if (!user) {
        return { msg: '用户不存在' }
    } else if (user.password === setEncryptPassword(param.password)) {
        return { code: 200, data: user }
    } else {
        return { msg: '密码错误' }
    }
}

/**
 * 退出登录
 */
export const setLoginOut = async (event: H3Event) => {
    // TODO 清除cookie
    return 1
}

/**
 * 注册
 */
export const setRegister = async (event: H3Event) => {
    // TODO 注册用户

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
    // const authSign = await useVerifySign(event)
    // if (!authSign) return { msg: '签名错误' }

    // 获取参数
    const param = await getEventParams<LoginDataType>(event)
    // console.log('param-----', param)

    if (!param?.username) return { msg: '请输入用户名' }

    if (!param.account) return { msg: '请输入登录账号' }
    if (!param.password) return { msg: '请输入登录密码' }

    const user = await event.context.prisma.admin.create({
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
}

/**
 * 修改密码
 */
export const setPasswordUpdate = async (event: H3Event) => {
    // 接口校验(是否登录)
    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    const param = await getEventParams<AdminPasswordParam>(event)

    if (!param?.password) return { msg: '请输入原密码' }
    if (!param.newPassword) return { msg: '请输入新密码' }

    if (param.password?.trim() === param.newPassword?.trim()) return { msg: '新密码不能与原密码相同' }

    // 查询原密码是否正确
    const admin = await event.context.prisma.admin.findUnique({
        where: {
            id: event.context.user.id,
            password: setEncryptPassword(param.password.trim()),
        },
    })
    if (!admin) return { msg: '原密码错误' }

    // 修改密码
    const user = await event.context.prisma.admin.update({
        data: {
            password: setEncryptPassword(param.newPassword.trim()),
        },
        where: {
            id: event.context.user.id,
        },
    })

    if (!user) return { msg: '网络错误' }
    return { code: 200, msg: '修改成功' }
}

/**
 * 登录用户信息
 */
export const getLoginInfo = async (event: H3Event) => {
    // 接口校验(是否登录)
    if (!event.context.user) return ResponseMessage.token

    const { password, createdAt, updatedAt, ...user } = event.context.user // eslint-disable-line unused-imports/no-unused-vars

    return { code: 200, data: user }
}

// 、、、/////////////////////////

/**
 * 获取用户列表
 */
export const getAdminList = async (event: H3Event) => {
    // 接口校验(是否登录)
    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    const param = await getEventParams<AdminFindParam>(event)

    const where: any = {}

    if (param?.account) {
        where.account = {
            contains: param.account, // 包含
        }
    }
    if (param?.username) {
        where.username = {
            contains: param.username, // 包含
        }
    }

    if (typeof param?.status === 'number') {
        where.status = param.status
    }

    // 查询用户姓"张"，1页显示20条
    let page: number | undefined
    let pageSize: number | undefined
    let pageSkip: number | undefined

    if (param?.isPage) {
        page = param.page || 1
        pageSize = param.pageSize || 20
        pageSkip = pageSize * (page - 1) || 0
    }

    const [res1, res2] = await Promise.all([
        event.context.prisma.admin.findMany({
            skip: pageSkip,
            take: pageSize,
            where,
            orderBy: {
                id: 'asc', // 按id正序排序
            },
            // select: { // 只返回指定的字段
            //     username: true,
            //     account: true,
            // },
        }),
        event.context.prisma.admin.count({
            where,
        }),
    ])
    const list = res1.map((item) => {
        return {
            ...item,
            password: '',
        }
    })
    if (res1) {
        return { code: 200, data: { list, total: res2 } }
    } else {
        return { code: 400, message: '查询失败' }
    }
}

/**
 * 创建用户
 */
export const setAdminCreate = async (event: H3Event) => {
    // 接口校验(是否登录)
    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    const param = await getEventParams<AdminCreateParam>(event)

    if (!param?.account) return { msg: '请输入登录账号' }
    if (!param?.username) return { msg: '请输入用户名称' }
    if (!param?.password) return { msg: '请输入登录密码' }

    const user = await event.context.prisma.admin.create({
        data: {
            ...param,
            status: param.status ? param.status : 1,
            password: setEncryptPassword(param.password),
        },
    })

    if (user) {
        return { code: 200, msg: '添加成功' }
    } else {
        return { msg: '网络错误' }
    }
}

/**
 * 修改用户
 */
export const setAdminUpdate = async (event: H3Event) => {
    // 接口校验(是否登录)
    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    const param = await getEventParams<{ id: number } & AdminCreateParam>(event)

    if (!param?.id) return { msg: '缺少参数id' }

    const user = await event.context.prisma.admin.update({
        data: {
            ...param,
            status: param.status ? param.status : 1,
            password: param.password ? setEncryptPassword(param.password) : undefined,
        },
        where: {
            id: param.id,
        },
    })

    if (user) {
        return { code: 200, msg: '修改成功' }
    } else {
        return { msg: '网络错误' }
    }
}

/**
 * 删除用户
 */
export const setAdminDelete = async (event: H3Event) => {
    // 接口校验(是否登录)
    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    const param = await getEventParams<{ id: number } & AdminCreateParam>(event)

    if (!param?.id) return { msg: '缺少参数id' }

    const user = await event.context.prisma.admin.delete({
        where: {
            id: param.id,
        },
    })

    if (user) {
        return { code: 200, msg: '删除成功' }
    } else {
        return { msg: '网络错误' }
    }
}
