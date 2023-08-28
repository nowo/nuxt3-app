import { createRouter, defineEventHandler, useBase } from 'h3'
import { getCompanyInfo, setCompanyInfo } from '~/server/controller/company'

const router = createRouter()

/**
 * 获取公司信息
 */
router.use('/info', defineEventHandler(async (event) => {
    return getCompanyInfo(event)
}))

/**
 * 修改公司信息
 */
router.use('/edit', defineEventHandler(async (event) => {
    return setCompanyInfo(event)
}))

/**
 * 获取底部导航
 */
router.use('/get_list', defineEventHandler(async (event) => {
    return 1
}))

export default useBase('/api/company', router.handler)
