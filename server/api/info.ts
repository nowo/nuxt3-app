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
})
