import fs from 'node:fs'
import path from 'node:path'

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

export const createFile = async () => {
    for (let i = 0; i < 10; ++i) {
        const baseDir = './base' + `/${i}`
        await dirExists(baseDir)
        const jsonContent = {
            name: 'yma16',
        }
        const jsonContentStr = JSON.stringify(jsonContent, null, '\t')
        fs.writeFile(`${baseDir}/a.json`, jsonContentStr, (err) => {
            if (err) return console.log(err)
            console.log('写入json成功')
        })
    }
}

// createFile()
