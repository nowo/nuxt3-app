import { extname } from 'node:path'
import type { H3Event, MultiPartData } from 'h3'
import { useCookie } from 'nuxt/app'

export const uploadFile = async (event: H3Event) => {
    const dat = await getEventParams<{ file: MultiPartData }>(event)

    if (dat?.file && dat.file.filename) {
        const ext = extname(dat.file.filename) // .png

        const url = await createFile(ext, dat.file.data, true)
        if (!url) return { msg: '上传失败' }
        return { code: 200, data: url }
    } else {
        return { msg: '文件格式错误' }
    }
}

/**
 * 获取菜单列表
 */
export const getMenuList = async (event: H3Event) => {
    // 接口校验(是否登录)
    // if (!event.context.user) return ResponseMessage.token

    const lang = useCookie('lang')

    const where: any = {
        p_id: 0,
    }

    const res = await event.context.prisma.menu.findMany({
        // skip: pageSkip,
        // take: pageSize,
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

    if (res) {
        if (lang.value === 'en') {
            [res.title, res.title_en] = [res.title_en, res.title]
        }
        return res
    } else {
        return null
    }
}
