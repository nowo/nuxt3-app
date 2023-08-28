/**
 * 该文件主要用作对某些库数据类型的扩展 
 */

import { PrismaClient } from '@prisma/client'


declare module 'h3' {
    interface H3EventContext {
        prisma: PrismaClient
        user?: UserOptionItem
    }
}

declare module "@next-auth/core" {
    interface Session {
        user?: User,
        token?: string
    }
    interface User {
        id: number;
        username: string
    }
}

export { }