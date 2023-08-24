import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRouter, defineEventHandler, useBase } from 'h3'

// import { authOptions } from '../auth/[...]'
import { loginSign } from '~/server/controller/login'

// import { getServerSession } from '#auth'
// import { getEventParams, useVerifySign } from '~/server/utils/request'

// import path from 'path'

// 当前运行文件的完整路径
const __filenameNew = fileURLToPath(import.meta.url) // E:\zjm\nuxt3-app\.nuxt\dev\index.mjs
// 当前运行文件的文件夹完整路径
const __dirnameNew = dirname(__filenameNew) // E:\zjm\nuxt3-app\.nuxt\dev

const router = createRouter()

// export default defineEventHandler(async (event) => {
//   const session = await getServerSession(event, authOptions)
//   const jwt = await getServerToken(event, authOptions)
//   return { session, jwt }
// })

/**
 * 获取底部导航
 */
router.use('/sign_test', defineEventHandler(async (event) => {
    // const dat = await readRawBody(event)
    // const dat = await readBody(event)
    const head = getHeader(event, 'content-type')
    console.log('🚀 ~ file: [...slug].ts:33 ~ router.use ~ head:', head)
    const dat = await getEventParams<{ username: string }>(event)
    console.log('🚀 ~ file: [...slug].ts:33 ~ router.use ~ dat:', dat)
    console.log(dat)
    // 文件上传方法
    const body = (await readMultipartFormData(event)) || []
    console.log(body)
    if (!body.length) return { msg: '未获取到文件' }

    // // 写入文件
    // writeFile(`/public/upload/2023/08/23/${body[0].filename}`, body[0].data, (err) => {
    //     console.log('err', err)
    // })

    console.log('__filenameNew :>> ', __filenameNew)
    console.log(__dirnameNew)
    const dir = resolve(__dirnameNew, '../../public/upload/2023/08/23')
    console.log(dir)
    // const dat = await dirExists('/public/upload/2023/08/23')
    // console.log(dat)
    return {
        code: 0,
        data: {
            sign: '1234567890',
        },
    }
    // interface LoginDataType {
    //     account: string
    //     password: string
    // }
    // // const method = getMethod(event)
    // // const query = getQuery(event) as unknown as LoginDataType
    // // const body = await readBody<LoginDataType>(event)
    // // const param = method === 'GET' ? query : body

    // // 接口校验
    // const authSign = await useVerifySign(event)
    // if (!authSign) return { msg: '签名错误' }

    // // 获取参数
    // const param = await getEventParams<LoginDataType>(event)
    // console.log(param)

    // if (!param.account) return { msg: '请输入登录账号' }
    // if (!param.password) return { msg: '请输入登录密码' }

    // const user = await event.context.prisma.user.findUnique({
    //     where: {
    //         account: param.account,
    //     },
    // })
    // const session = await getServerSession(event, authOptions)
    // console.log('session :>> ', session)
    // if (!user) {
    //     return {
    //         msg: '用户不存在',
    //     }
    // }

    // return { session }
}))

// 登录接口
router.use('/sign', defineEventHandler(event => loginSign(event)))

export default useBase('/api/login', router.handler)
