import type { H3Event } from 'h3'

// import { ResponseMessage } from '~/config/message'

/**
 * 获取系统信息
 */
export const getSystemInfo = async (event: H3Event) => {
    // 接口校验
    // if (!event.context.user) return ResponseMessage.token

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
