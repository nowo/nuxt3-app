// This endpoint returns all existing example records
// import { usePrisma } from '@sidebase/nuxt-prisma'
// export default eventHandler((event) => {
//   // `prisma` is typed and will help you to interact with the database. In addition all parameters you put into your database will be validated at runtime to ensure maximum safety.
//   const prisma = usePrisma(event)
//   console.log(prisma)
//   return 1
//   // return prisma.example.findMany()
// })

export default defineEventHandler(async (event) => {
    // `prisma` is typed and will help you to interact with the database. In addition all parameters you put into your database will be validated at runtime to ensure maximum safety.
    // const prisma = usePrisma(event)
    // console.log(prisma)
    // const res = await event.context.prisma.user.create({
    //   data: {
    //     name: `张三${Date.now()}`,
    //   },
    // })
    // console.log(event)
    // return { code: 200, data: JSON.stringify(event) }
    const res = await event.context.prisma.user.findMany()
    console.log(res)
    return { code: 200, data: res }
    // return prisma.example.findMany()

    // 查询用户姓"张"，1页显示20条
    const page = 1
    const pageSize = 20
    const keyword = '张'
    const firstQueryResults = await event.context.prisma.user.findMany({
        skip: pageSize * (page - 1) || 0,
        take: pageSize,
        where: {
            username: {
                contains: keyword, // 包含
            },
        },
        orderBy: {
            id: 'asc', // 按id正序排序
        },
        select: { // 只返回指定的字段
            username: true,
            account: true,
        },
    })
})
