import type { H3Event } from 'h3'
import { ResponseMessage } from '~/config/message'

/**
 * 获取公司信息
 */
export const getSystemInfo = async (event: H3Event) => {
    // // 接口校验
    // const authSign = await useVerifySign(event)
    // if (!authSign) return ResponseMessage.sign

    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    // const param = await getEventParams<LoginDataType>(event)
    // console.log('param-----', param)

    const [res1, res2] = await Promise.all([
        event.context.prisma.system.findUnique({ where: { id: 1 } }),
        event.context.prisma.system.findUnique({ where: { id: 2 } }),
    ])
    if (res1 && res2) {
        return {
            code: 200,
            data: {
                ...res1,
                title_en: res2.title,
                address_en: res2.address,
                filing_en: res2.filing,
                copyright_en: res2.copyright,
            },
        }
    } else {
        return { msg: '获取数据有误' }
    }
}

/**
 * 修改公司信息
 */
export const setSystemInfo = async (event: H3Event) => {
    // // 接口校验
    // const authSign = await useVerifySign(event)
    // if (!authSign) return ResponseMessage.sign

    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    const param = await getEventParams<ISystemEditParams>(event)
    // console.log('param-----', param)

    if (!param?.title) return { msg: '公司名称不能为空' }

    const [res1, res2] = await Promise.all([
        event.context.prisma.system.update({
            data: {
                title: param.title,
                address: param.address,
                logo: param.logo,
                logo2: param.logo2,
                qrCode: param.qr_code,
                phone: param.phone,
                email: param.email,
                keyword: param.seo_keyword,
                description: param.seo_description,
                filing: param.filing,
                copyright: param.copyright,
                icon: param.icon,
            },
            where: { id: 1 },
        }),
        event.context.prisma.system.update({
            data: {
                title: param.title_en,
                address: param.address_en,
                // logo: param.logo,
                // logo2: param.logo2,
                // qr_code: param.qr_code,
                // phone: param.phone,
                // email: param.email,
                // seo_keyword: param.seo_keyword,
                // seo_description: param.seo_description,
                filing: param.filing_en,
                copyright: param.copyright_en,
            },
            where: { id: 2 },
        }),
    ])
    if (res1 && res2) {
        return {
            code: 200,
            msg: '设置成功',
        }
    } else {
        return { msg: '获取数据有误' }
    }
}
