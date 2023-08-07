# nuxt项目集成prisma

<a href="https://prisma.yoga/" target="_blank">prisma中文文档 https://prisma.yoga/</a>

<a href="https://prisma.yoga/reference/api-reference/prisma-schema-reference" target="_blank">https://prisma.yoga/reference/api-reference/prisma-schema-reference</a>

## 一、添加prisma到项目中
安装`prisma`
```bash
pnpm install prisma --save-dev
```
通过命令生成`schema.prisma`模型文件，也可以自己手动去创建prisma/schema.prisma
```bash
npx prisma init
```
## 二、连接数据库
1. 这里连接的是`mysql`数据库，将`provider`设置成`mysql`

2. `.env`文件设置环境变量`DATABASE_URL`连接数据库的配置,
数据库类型、账号、密码、主机、端口号、数据库名
```prisma
// prisma/schema.prisma
datasource db {
  // provider = "postgresql"
  provider = "mysql"
  url      = env("DATABASE_URL")
}

// .env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

## 三、prisma模型处理
数据库已经存在各种数据表时，此时就将各个表的字段同步到schema.prisma生成对应的各个模型
```bash
npx prisma db pull
```


#### 修改、创建模型,只要是对model有改动时，就要同步到数据库里，更新相应的表，同时typescript对应的类型也会更新
```bash
npx prisma db push
```


## 四、 安装@prisma/client执行业务操作
```bash
pnpm install @prisma/client
```
1. 将prisma实例挂载到event参数上使用

在`server/middleware`文件夹下创建`0.prisma.ts`文件，前面的这个0表示这个中间件加载的顺序
```typescript
// server/middleware/0.prisma.ts
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

declare module 'h3' {
  interface H3EventContext {
    prisma: PrismaClient
  }
}

export default eventHandler((event) => {
  if (!prisma) {
    prisma = new PrismaClient()
  }
  event.context.prisma = prisma
})
```

使用方式,通过`event.context.prisma`就可以拿到对应的模型，然后进行相应的操作
```typescript
// server/api/user.ts
export default defineEventHandler(async (event) => {
  // 获取用户表的所有用户
  const res = await event.context.prisma.user.findMany()
  // console.log(res)
  return { code: 200, data: res }
})
```




<!-- npx prisma db pull -->

<!-- npx prisma db push -->