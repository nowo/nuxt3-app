# Changelog


## v0.0.2

[compare changes](https://github.com/cooj/nuxt3-app/compare/0.0.1...v0.0.2)

### 🚀 Enhancements

- **other:** 登录权鉴相关内容 ([91aab1c](https://github.com/cooj/nuxt3-app/commit/91aab1c))
- **utils:** 添加crypto-js插件，增加MD5加密方法，用于后续接口加密使用 ([539d3ec](https://github.com/cooj/nuxt3-app/commit/539d3ec))
- **other:** 添加i18n插件，为后续实现国际化准备 ([5bf1b37](https://github.com/cooj/nuxt3-app/commit/5bf1b37))
- **utils:** 服务端获取参数方法整合 ([505d5c5](https://github.com/cooj/nuxt3-app/commit/505d5c5))
- **utils:** 增加server端获取get、post参数方法（整合统一使用）；增加接口签名验证方法；服务端使用$fetch请求本地接口方法封装，方法内追加了签名配置 ([47306a8](https://github.com/cooj/nuxt3-app/commit/47306a8))
- **deps:** 增加后台布局页面LayoutAdmin，默认布局页面使用空白页；AuthConfig类型扩展；取消jose等别名配置 ([ab19ca8](https://github.com/cooj/nuxt3-app/commit/ab19ca8))
- **utils:** 增加常用的一些方法，获取地址参数、判断文件类型、字符串截取等 ([1087229](https://github.com/cooj/nuxt3-app/commit/1087229))
- **config:** Server文件夹下增加tsconfig.json文件 ([66d5c85](https://github.com/cooj/nuxt3-app/commit/66d5c85))
- **components:** 增加i18n切换语言版本的操作功能，默认显示第一个为中文版 ([af76fec](https://github.com/cooj/nuxt3-app/commit/af76fec))
- **utils:** 增加server/utils/mkdir.ts文件，添加判断文件存在，创建文件夹等方法；增加upload页面用于测试文件上传 ([f5da72f](https://github.com/cooj/nuxt3-app/commit/f5da72f))
- **utils:** GetEventParams方法增加对formData数据类型参数的获取处理 ([8c6fccf](https://github.com/cooj/nuxt3-app/commit/8c6fccf))
- **other:** Contronller方法更改，取消defineEventHandler在包一层的情况；前端通过接口文件上传，并保存进行测试 ([ab411ba](https://github.com/cooj/nuxt3-app/commit/ab411ba))
- **components:** 后台系统页面内容搭建 ([8807f11](https://github.com/cooj/nuxt3-app/commit/8807f11))
- **other:** 添加菜单模块，增删改查功能 ([633376e](https://github.com/cooj/nuxt3-app/commit/633376e))
- **other:** 增加获取用户信息接口，去除页面的打印信息 ([80f51b1](https://github.com/cooj/nuxt3-app/commit/80f51b1))
- **other:** 增加轮播图、友情链接相应的接口 ([9241605](https://github.com/cooj/nuxt3-app/commit/9241605))
- **other:** 增加新闻咨询相关的增删改查接口 ([a4f554a](https://github.com/cooj/nuxt3-app/commit/a4f554a))
- **other:** 新增前端获取菜单列表的方法，区分中英文 ([4a57da0](https://github.com/cooj/nuxt3-app/commit/4a57da0))
- **components:** 设置首页获取系统信息，获取菜单列表功能，以及中英文数据的渲染处理 ([033369a](https://github.com/cooj/nuxt3-app/commit/033369a))
- **components:** 使用nuxt-swiper模块配置轮播图 ([a2c1fb9](https://github.com/cooj/nuxt3-app/commit/a2c1fb9))
- **components:** 底部footer模块内容设计，server接口更新对应内容 ([c0fbb46](https://github.com/cooj/nuxt3-app/commit/c0fbb46))
- **hooks:** 增加vue获取路由参数的方法，useRouteParam、useRouteQuery ([01fa897](https://github.com/cooj/nuxt3-app/commit/01fa897))
- **other:** Element-plus主题色、国际化配置；获取当前页菜单项更新 ([4315862](https://github.com/cooj/nuxt3-app/commit/4315862))
- **components:** 添加新闻列表和新闻详情页面，相关接口的设计、数据渲染处理 ([00149d0](https://github.com/cooj/nuxt3-app/commit/00149d0))
- **components:** 增加公司风采、公司公告页面，列表与新闻列表区分开 ([dad04da](https://github.com/cooj/nuxt3-app/commit/dad04da))
- **other:** 添加后台产品增删改查等相关接口 ([d2eecb0](https://github.com/cooj/nuxt3-app/commit/d2eecb0))
- **other:** 产品列表页、详情页与新闻模块内容整合，以及相关接口内容设计 ([9ed747a](https://github.com/cooj/nuxt3-app/commit/9ed747a))
- **other:** 网站图标和相关SEO配置，产品列表每页显示的数量更改 ([c9c2358](https://github.com/cooj/nuxt3-app/commit/c9c2358))
- **config:** Crypto导入方式更改，添加changelogen用于版本的打包发布 ([1711f10](https://github.com/cooj/nuxt3-app/commit/1711f10))

### 🩹 Fixes

- **config:** 配置i18n国际化，增加中文、英文两个版本，默认使用中文版 ([00a3746](https://github.com/cooj/nuxt3-app/commit/00a3746))
- **utils:** UseServerFetch方法options参数类型更新 ([e0d49d5](https://github.com/cooj/nuxt3-app/commit/e0d49d5))
- **config:** 登录调用接口优化，用户密码加密，新增controller文件夹，配置接口跟执行方法进行分离 ([20582c0](https://github.com/cooj/nuxt3-app/commit/20582c0))
- **config:** I18n配置文件改成cn、en命名；server/tsconfig.json增加allowSyntheticDefaultImports:true ([c859b94](https://github.com/cooj/nuxt3-app/commit/c859b94))
- **config:** 改用@sidebase/nuxt-auth做登陆权鉴；更新依赖 ([4b5d461](https://github.com/cooj/nuxt3-app/commit/4b5d461))
- **components:** 增加图片组件，无图片时显示默认图标；修改打包时图片路径不对的地方；增加extends.d.ts用于扩展库的数据结构类型 ([5fcc024](https://github.com/cooj/nuxt3-app/commit/5fcc024))
- **utils:** 实现上传文件并保存功能，createFile文件保存方法更新 ([0c192c5](https://github.com/cooj/nuxt3-app/commit/0c192c5))
- **other:** 登录使用jwt权鉴，API接口通过中间件去判断签名是否正确，用户已登录则绑定到context对象中 ([645de45](https://github.com/cooj/nuxt3-app/commit/645de45))
- **other:** 系统信息设置与公司介绍分开，图片上传修改 ([74bf4f5](https://github.com/cooj/nuxt3-app/commit/74bf4f5))
- **other:** GetMethod方法已弃用，更改为event.method ([329ac04](https://github.com/cooj/nuxt3-app/commit/329ac04))
- **other:** 删除user表，使用admin表替代，添加用户增删改查功能 ([5a5961d](https://github.com/cooj/nuxt3-app/commit/5a5961d))
- **other:** 修改密码判断更新 ([7549558](https://github.com/cooj/nuxt3-app/commit/7549558))
- **other:** Menu表优化，查询可得到树形数据；getEventParams方法优化，处理参数可能为undefined的情况 ([ad9f114](https://github.com/cooj/nuxt3-app/commit/ad9f114))
- **other:** 菜单查询树形数据使用children为子类，菜单增删改查绑定对应的各个方法 ([0058e08](https://github.com/cooj/nuxt3-app/commit/0058e08))
- **components:** 删除后台布局页面 ([2ef819e](https://github.com/cooj/nuxt3-app/commit/2ef819e))
- **other:** 设置前端获取关于我们、联系我们接口数据时跳过用户登录验证 ([6030cb1](https://github.com/cooj/nuxt3-app/commit/6030cb1))
- **other:** 当前页面标题更改相应的面包屑导航 ([79f2f98](https://github.com/cooj/nuxt3-app/commit/79f2f98))
- **components:** 404全局错误页面配置 ([11e412e](https://github.com/cooj/nuxt3-app/commit/11e412e))
- **components:** 新闻列表页面、详情页面内容封装成组件方式调用；新增客户案例页面 ([e1ad6e4](https://github.com/cooj/nuxt3-app/commit/e1ad6e4))
- **other:** 删除多余路由页面 ([ada35b2](https://github.com/cooj/nuxt3-app/commit/ada35b2))
- **config:** 文件保存主机和路径通过useRuntimeConfig()调用，防止出现生产环境获取不到的情况 ([adb5194](https://github.com/cooj/nuxt3-app/commit/adb5194))
- **config:** 环境变量整理，配合nuxt.config文件配置使用 ([2a19a51](https://github.com/cooj/nuxt3-app/commit/2a19a51))

### 💅 Refactors

- **other:** 代码风格改用4空格缩进；eslint规则配置增加；删除无用组件，auth登录权鉴配置 ([80c6664](https://github.com/cooj/nuxt3-app/commit/80c6664))

### 🏡 Chore

- **config:** 去除unocss默认设置的按钮样式 ([efa8ebb](https://github.com/cooj/nuxt3-app/commit/efa8ebb))
- **config:** Vscode使用i18n-ally插件，语言文件及设置使用大写命名，删除多余的语言配置文件 ([3d2fba1](https://github.com/cooj/nuxt3-app/commit/3d2fba1))
- **config:** 增加.env.example环境变量文件，文件内容为.env内容的格式 ([fba44ca](https://github.com/cooj/nuxt3-app/commit/fba44ca))
- **styles:** Css、scss文件导入方式修改，从配置导入 ([6bdfc14](https://github.com/cooj/nuxt3-app/commit/6bdfc14))
- **other:** 设计公共页面布局结构，完成关于我们、联系我们页面 ([dc4f6ca](https://github.com/cooj/nuxt3-app/commit/dc4f6ca))
- **other:** 删除无用的路由页面 ([4b77bcd](https://github.com/cooj/nuxt3-app/commit/4b77bcd))

### ❤️ Contributors

- Cooj ([@cooj](http://github.com/cooj))

