import { createRouter, defineEventHandler, useBase } from 'h3'
import { uploadFile } from '~/server/controller/common'

const router = createRouter()

/**
 * 文件上传
 */
router.use('/upload', defineEventHandler(async (event) => {
    console.log(112222222221111)
    return uploadFile(event)
}))

/**
 * 接口测试
 */
router.use('/test', defineEventHandler(async (event) => {
    console.log(1111111111111111)
    return 123
}))

export default useBase('/api/common', router.handler)
