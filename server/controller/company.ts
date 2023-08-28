import type { H3Event } from 'h3'
import { ResponseMessage } from '../../config/message'

/**
 * 获取公司信息
 */
export const getCompanyInfo = async (event: H3Event) => {
    // // 接口校验
    // const authSign = await useVerifySign(event)
    // if (!authSign) return ResponseMessage.sign

    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    // const param = await getEventParams<LoginDataType>(event)
    // console.log('param-----', param)

    const [res1, res2] = await Promise.all([
        event.context.prisma.company.findUnique({ where: { id: 1 } }),
        event.context.prisma.company.findUnique({ where: { id: 2 } }),
    ])
    if (res1 && res2) {
        return {
            code: 200,
            data: {
                ...res1,
                company_en: res2.company,
                address_en: res2.address,
                filing_code_en: res2.filing_code,
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
export const setCompanyInfo = async (event: H3Event) => {
    // // 接口校验
    // const authSign = await useVerifySign(event)
    // if (!authSign) return ResponseMessage.sign

    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    // const param = await getEventParams<LoginDataType>(event)
    // console.log('param-----', param)

    const [res1, res2] = await Promise.all([
        event.context.prisma.company.findUnique({ where: { id: 1 } }),
        event.context.prisma.company.findUnique({ where: { id: 2 } }),
    ])
    if (res1 && res2) {
        return {
            code: 200,
            data: {
                ...res1,
                company_en: res2.company,
                address_en: res2.address,
                filing_code_en: res2.filing_code,
                copyright_en: res2.copyright,
            },
        }
    } else {
        return { msg: '获取数据有误' }
    }
}
