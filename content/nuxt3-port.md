# nuxt3端口号修改
## 一、修改开发环境端口号
- 方式一：使用环境变量配置,设置（`PORT` 或 `NUXT_PORT`）

```bash
    # .env
    PORT=3001  #http://localhost:3001/
    NITRO_PORT=3001  #http://localhost:3001/
```
- 方式二：nuxt.config.ts里配置
```ts
// nuxt.config.ts
export default defineNuxtConfig({
    devServer: {
        port: 3001,
    },
})
```
- 方式三：运行项目时的命令设置端口号
```json
// package.json
{
    // ...
    "scripts": {
        "dev": "nuxt dev --port 3001"
    }
}
```
> 优先级：未使用的端口（指定的端口被占用时）> 方式三 > 方式二 > NITRO_PORT > PORT


## 二、修改生产环境端口号
修改生产环境端口号，目前只知道这一种方法，就是在node .output/server/index.mjs命令前面加上PORT=3001
```json
// package.json
{
    // ...
    "scripts": {
        "start": "PORT=3001 node .output/server/index.mjs"
    }
}
```

## 相关连接
+ https://github.com/nuxt/nuxt/discussions/15910
+ https://nuxt.com/docs/getting-started/deployment#configuring-defaults-at-runtime


