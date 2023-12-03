import type { H3Event } from 'h3'

// import { ResponseMessage } from '~/config/message'

/**
 * 获取系统信息
 */
export const getSystemInfo = async (event: H3Event) => {
    // 接口校验
    // if (!event.context.user) return ResponseMessage.token
    // console.log('event :>> ', event);

    const [res1, res2] = await Promise.all([
        event.context.prisma.system.findUnique({ where: { id: 1 } }),
        event.context.prisma.system.findUnique({ where: { id: 2 } }),
    ])
    if (res1 && res2) {
        return {
            ...res1,
            title_en: res2.title,
            address_en: res2.address,
            filing_en: res2.filing,
            copyright_en: res2.copyright,
        }
    } else {
        return null
    }
}

/**
 * 获取菜单
 */
export const getMenuList = async (event: H3Event) => {
    // 接口校验
    // if (!event.context.user) return ResponseMessage.token

    // const lang = useCookie<'cn' | 'en'>('i18n_redirected')
    // console.log('🚀 ~ file: page.ts:38 ~ getMenuList ~ lang:', lang)

    const where: any = {
        p_id: 0,
        // isHide: false,
    }

    const res = await event.context.prisma.menu.findMany({
        where,
        orderBy: {
            sort: 'asc', // 按id正序排序
        },
        include: {
            children: true,
        },
        // select: { // 只返回指定的字段
        //     username: true,
        //     account: true,
        // },
    })

    return res
}

/**
 * 获取轮播图
 */
export const getBannerList = async (event: H3Event) => {
    // 接口校验
    // if (!event.context.user) return ResponseMessage.token

    // const lang = useCookie<'cn' | 'en'>('i18n_redirected')
    // console.log('🚀 ~ file: page.ts:38 ~ getMenuList ~ lang:', lang)

    // 获取参数
    const param = await getEventParams<{ type: number } & ListPage>(event)

    const where: any = {
        type: param?.type ? Number(param?.type) : 1,
        isHide: false,
    }

    const res = await event.context.prisma.link.findMany({
        where,
        orderBy: {
            sort: 'asc', // 按id正序排序
        },
        // include: {
        //     children: true,
        // },
        // select: { // 只返回指定的字段
        //     username: true,
        //     account: true,
        // },
    })

    return res
}

/**
 * 获取关于我们、联系我们的内容
 */
export const getAboutInfo = async (event: H3Event) => {
    // 获取参数
    const param = await getEventParams<{ type: number }>(event)

    if (!param?.type) return { msg: '不存在记录' }

    const res = await event.context.prisma.other.findUnique({
        where: {
            type: Number(param.type),
        },
    })
    return res
}

/**
 * 获取商品
 */
export const getGoodsList = async (event: H3Event) => {
    // TODO: 商品
    // 获取参数
    const param = await getEventParams<{ type: number }>(event)

    if (!param?.type) return { msg: '不存在记录' }

    const res = await event.context.prisma.other.findUnique({
        where: {
            type: Number(param.type),
        },
    })
    return res
}

/**
 * 获取新闻详情
 */
export const getNewsInfo = async (event: H3Event) => {
    // 获取参数
    const param = await getEventParams<{ id: number; type: number }>(event)

    if (!param?.id) return null
    if (!param?.type) return null

    const res = await event.context.prisma.news.findUnique({
        where: {
            id: Number(param.id),
            type: Number(param.type),
        },
    })

    if (!res) return null
    // 取得上一条、下一条记录、更新阅读量
    const [res1, res2] = await Promise.all([
        event.context.prisma.news.findMany({ // lte 小于等于，使用倒序
            where: {
                createdAt: {
                    lte: res.createdAt,
                },
                id: { // 排除
                    not: res.id,
                },
                type: res.type, // 类型相同
            },
            orderBy: {
                createdAt: 'desc', // 倒序排序
            },
        }),
        event.context.prisma.news.findMany({ // gte 大于等于，使用正序
            where: {
                createdAt: {
                    gt: res.createdAt,
                },
                id: {
                    not: res.id,
                },
                type: res.type,
            },
            orderBy: {
                createdAt: 'asc', // 升序排序
            },
        }),
        event.context.prisma.news.update({
            where: {
                id: res.id,
            },
            data: {
                read: (res.read || 0) + 1,
            },
        }),
    ])

    return {
        data: res,
        prevNews: res1[0],
        nextNews: res2[0],
    }
}

/**
 * 获取商品详情
 */
export const getProductInfo = async (event: H3Event) => {
    // 获取参数
    const param = await getEventParams<{ id: number }>(event)

    if (!param?.id) return null

    const res = await event.context.prisma.product.findUnique({
        where: {
            id: Number(param.id),
            // type: Number(param.type),
        },
    })

    if (!res) return null
    // 取得上一条、下一条记录、更新阅读量
    const [res1, res2] = await Promise.all([
        event.context.prisma.product.findMany({ // lte 小于等于，使用倒序
            where: {
                createdAt: {
                    lte: res.createdAt,
                },
                id: { // 排除
                    not: res.id,
                },
                type: res.type, // 类型相同
            },
            orderBy: {
                createdAt: 'desc', // 倒序排序
            },
        }),
        event.context.prisma.product.findMany({ // gte 大于等于，使用正序
            where: {
                createdAt: {
                    gt: res.createdAt,
                },
                id: {
                    not: res.id,
                },
                type: res.type,
            },
            orderBy: {
                createdAt: 'asc', // 升序排序
            },
        }),
        event.context.prisma.product.update({
            where: {
                id: res.id,
            },
            data: {
                read: (res.read || 0) + 1,
            },
        }),
    ])

    return {
        data: res,
        prevNews: res1[0],
        nextNews: res2[0],
    }
}
