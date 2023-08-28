import { createRouter, defineEventHandler, useBase } from 'h3'
import { getCompanyInfo } from '~/server/controller/company'

const router = createRouter()

/**
 * 获取公司信息
 */
router.use('/info', defineEventHandler(async (event) => {
    console.log('111 :>> ', 111)
    return getCompanyInfo(event)
}))

/**
 * 获取底部导航
 */
router.use('/get_list', defineEventHandler(async (event) => {
    return 1
}))

export default useBase('/api/company0', router.handler)
