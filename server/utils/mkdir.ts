import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// import { dirname, extname, join, resolve } from 'node:path'
// import { writeFileSync } from 'node:fs'

// 当前运行文件的完整路径
const __filenameNew = fileURLToPath(import.meta.url) // E:\zjm\nuxt3-app\.nuxt\dev\index.mjs
// 当前运行文件的文件夹完整路径
const __dirnameNew = path.dirname(__filenameNew) // E:\zjm\nuxt3-app\.nuxt\dev

/**
 * 读取路径信息,判断路径是否存在
 * @param {string} path 路径
 */
export const getStat = (path: fs.PathLike): Promise<fs.Stats | false> => {
    // const statsObj = fs.statSync('test_file.txt')
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                resolve(false)
            } else {
                resolve(stats)
            }
        })
    })
}

/**
 * 创建路径
 * @param {string} dir 路径
 */
export const mkdir = (dir: fs.PathLike): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        fs.mkdir(dir, (err) => {
            if (err) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })
}

/**
 * 路径是否存在，不存在则创建
 * @param {string} dir 路径
 */
export const dirExists = async (dir: fs.PathLike) => {
    const isExists = await getStat(dir)
    // 路径存在是目录
    if (isExists && isExists.isDirectory()) {
        return true
    } else if (isExists) {
        // 文件
        return false
    }
    // 拿到上级路径
    const tempDir = path.parse(dir as string).dir
    console.log('tempDir :>> ', tempDir)
    // 递归判断，如果上级目录也不存在，则会代码会在此处继续循环执行，直到目录存在
    const status = await dirExists(tempDir)
    let mkdirStatus = false
    if (status) {
        mkdirStatus = await mkdir(dir)
    }
    return mkdirStatus
}

// export const createFile = async () => {
//     for (let i = 0; i < 10; ++i) {
//         const baseDir = './base' + `/${i}`
//         await dirExists(baseDir)
//         const jsonContent = {
//             name: 'yma16',
//         }
//         const jsonContentStr = JSON.stringify(jsonContent, null, '\t')
//         fs.writeFile(`${baseDir}/a.json`, jsonContentStr, (err) => {
//             if (err) return console.log(err)
//             console.log('写入json成功')
//         })
//     }
// }

/**
 * 创建文件，先根据时间创建文件夹，在保存文件
 * @param ext 文件后缀，例如.png
 * @param data 存储的Buffer数据或是字符串
 * @param {boolean} [isHost]   主机地址，最后返回的地址是否需要拼接上主机地址 例如： http://localhost:3000/upload/2023/01/1692946999503sy45g8.txt
 * @returns string|false    保存成功时返回路径地址
 * @example
 * ```js
 * createFile('.txt', '文件内容11') // /upload/2023/01/1692946999503sy45g8.txt
 * ```
 */
export const createFile = async (ext: string, data: NodeJS.ArrayBufferView | string, isHost = false) => {
    const runtimeConfig = useRuntimeConfig()
    // 文件主机地址
    const HOST = runtimeConfig.upload.host || ''
    // 文件路径
    const uploadDir = runtimeConfig.upload.dir || ''

    // const dir = resolve(uploadDir, '2023/08/23')
    // const file = resolve(dir, `${dateDir}${ext}`)

    const date = new Date()

    // 根据时间生成文件夹
    const dateDir = date.toLocaleDateString() // 2023/01/02
    const url = `${uploadDir}/${dateDir}` // 完整的路径地址

    // 线上是运行.output/server/index.mjs（开发也是一样）,所以需要向上找两层
    const createDir = path.resolve(__dirnameNew, `../..${url}`)
    console.log(createDir)

    // 创建文件夹
    const folder = await dirExists(createDir)
    console.log(folder)
    if (!folder) {
        console.warn('创建文件夹失败')
        return false
    }

    // 写入文件
    try {
        const randomStr = Math.random().toString(36).substring(2, 6 + 2) // 随机字符串6位

        const filename = date.getTime() + randomStr + ext // 文件名
        const fileUrl = path.join(createDir, filename) // 写入的路径地址
        await fs.writeFileSync(fileUrl, data)

        // 返回给前端调用的url地址
        const linkUrl = url.split('/').slice(2).join('/') // /upload/2023/01/02
        const returnUrl = `/${linkUrl}/${filename}` // /upload/2023/01/02/1677521600000.jpg

        const backUrl = isHost ? `${HOST}${returnUrl}` : returnUrl

        return backUrl
    } catch (error) {
        console.error('文件写入失败:', error)
        return false
    }
}
