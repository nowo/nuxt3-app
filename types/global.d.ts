declare module 'element-plus/dist/locale/zh-cn.mjs';


declare module "@auth/core/types" {
    interface Session {
        user?: User
    }
    interface User {
        id: number;
        username: string
    }
}

export { }