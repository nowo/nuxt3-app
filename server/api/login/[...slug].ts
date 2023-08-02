import { createRouter, defineEventHandler, useBase } from 'h3'
import { authOptions } from '../auth/[...]'
import { getServerSession } from '#auth'

const router = createRouter()

// export default defineEventHandler(async (event) => {
//   const session = await getServerSession(event, authOptions)
//   const jwt = await getServerToken(event, authOptions)
//   return { session, jwt }
// })

/**
 * 获取底部导航
 */
router.use('/sign', defineEventHandler(async (event) => {
  interface LoginDataType {
    account: string
    password: string
  }
  const method = getMethod(event)
  const query = getQuery(event) as unknown as LoginDataType
  const body = await readBody<LoginDataType>(event)
  const param = method === 'GET' ? query : body

  const user = await event.context.prisma.user.findUnique({
      where: {
          account: param.account,
      },
  })
  const session = await getServerSession(event, authOptions)
  console.log('session :>> ', session)
  if (!user) {
      return {
          msg: '用户不存在',
      }
  }

  return 1
}))

export default useBase('/api/login', router.handler)
