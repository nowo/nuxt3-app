/**
 * 该文件主要用作对某些库数据类型的扩展
 */

import type { PrismaClient } from '@prisma/client'

import type { GlobalComponents } from 'vue'

declare global {
    type ComponentInstance = {
        [Property in keyof GlobalComponents]: InstanceType<GlobalComponents[Property]>
    }
}

declare module 'h3' {
    interface H3EventContext {
        prisma: PrismaClient
        user?: UserOptionItem
    }
}

declare module '@next-auth/core' {
    interface Session {
        user?: User
        token?: string
    }
    interface User {
        id: number
        username: string
    }
}

export { }
