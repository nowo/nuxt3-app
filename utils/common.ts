/**
 * waitUtil方法
 * @param ms 需要等待的时间，毫秒级
 * @returns
 * @example
 * ```js
 * // 等待1秒后，再往后面运行
 * await wait(1000)
 * ```
 */
export const wait = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

/**
 * @function 判断数据类型
 * @param {any} o 对应的数据
 * @example
 *  types("") // "string"
    types({}); // "object"
    types([]); // "array"
    types(100); // "number"
    types(null); // "null"
    types(); // "undefined"
    types(/abcd/); // "regex"
    types(new Date()); // "date"
 *
 */
export const types = (o: any) => {
    const s = Object.prototype.toString.call(o)
    return s.match(/\[object (.*?)\]/)?.[1].toLowerCase()
}

/**
 * @description 时间戳转化为年 月 日 时 分 秒
 * @function formatTime(format,num)
 * @param {number|Date} [num = new Date().getTime()|new Date] 时间戳或者时间对象,默认使用当前时间戳, new Date().getTime(); 获取当前时间戳（毫秒）
 * @param {string} [format='YYYY-mm-dd HH:MM:SS'] 时间格式,不填时默认使用'YYYY-mm-dd HH:MM:SS'格式,更改只需替换中间连接符号就行'YYYY年mm月dd日 HH时MM分SS秒'
 * @example
    let timestamp = 1558580029950; //js一般获取的时间戳是13位，PHP一般是10位
    formatTime(timestamp,'YYYY-mm-dd HH:MM:SS')   // 2019-05-23 10:53:49
*/
export const formatTime = (num: number | string | Date = new Date().getTime(), format = '') => {
    format = format || 'YYYY-mm-dd HH:MM:SS' // 第一个参数不填时，使用默认格式
    let ret,
        date: Date,
        reNum
    if (types(num) === 'number') {
        // 处理时间戳，js一般获取的时间戳是13位，PHP一般是10位,根据实际情况做判断处理
        if (num.toString().length === 10) {
            date = new Date((num as number) * 1000)
        } else {
            date = new Date(num)
        }
    } else if (types(num) === 'string') {
        if (!Number.isNaN(Number(num))) {
            num = Number(num)
        }
        date = new Date(num)
    } else if (types(num) === 'date') {
        date = num as Date
    } else {
        return ''
    }
    if (types(date) !== 'date') return ''

    const opt = {
        Y: date.getFullYear().toString(), // 年
        m: (date.getMonth() + 1).toString(), // 月
        d: date.getDate().toString(), // 日
        H: date.getHours().toString(), // 时
        M: date.getMinutes().toString(), // 分
        S: date.getSeconds().toString(), // 秒
        // 目前用的是这六种符号,有其他格式化字符需求可以继续添加，值必须转化成字符串
    }
    let k: keyof typeof opt
    for (k in opt) {
        ret = new RegExp(`(${k}+)`).exec(format)
        if (ret) {
            reNum = ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0') // 根据复数前面是否补零,如“mm”补零，单“m”前面不补零
            format = format.replace(ret[1], reNum) // 替换
        }
    }
    return format
}

/**
 * @function 获取浏览器地址的参数，不传参数时，获取的是地址栏的地址，返回一个封装参数的json对象
 * @param {String} [name=''] 获取值的key,默认为空,为空时，函数返回json对象
 * @param {String} [url=window.location.href] 地址，默认为浏览器的url
 * @returns {string|object} name为空时，返回对象
 * @example
 * getUrlParams('aa', 'https://www.baidu.com?aa=101')       //101
 */
export const getUrlParams = (name = '', url: string = window.location.href): string | object => {
    let endVal = ''
    if (url.includes('?')) { // 判断url中有没有出现?
        let arrStr = url.substring(url.indexOf('?') + 1).split('&') // 截取字符串，获取到?后面的那部分内容;以&符号为准，分割成数组
        arrStr = arrStr.filter(item => item) // 原有数组过滤为空的值
        const obj: any = {}
        for (let i = 0; i < arrStr.length; i++) {
            const index = arrStr[i].indexOf('=')
            const keys = arrStr[i].substring(0, index) // 第一个等号前面的那部分
            const value = arrStr[i].substring(index + 1) // 第一个等号后面的内容
            if (keys) { // keys不为空时，追加到obj对象里
                obj[keys] = decodeURI(value) // 解码输出,值含有中文字符的情况
            }
        }
        if (arrStr.length > 0) { // 先判断数组是不是为空，在判断name是不是有值传过来
            // 有name就返回name对应的值，没有就返回obj对象
            endVal = name ? (obj[name] || '') : obj
        }
    }
    return endVal
}

/**
 * @function  地址栏追加参数（更新参数值）,不刷新页面
 * @param {String} key 参数名
 * @param {String|Number} value 参数的值
 * @param {String} url 需要更新的页面地址 不更新页面将返回到初始页面。 不传递任何参数将使用默认url地址。
 * @example
 * updateUrlParams('pp',123)  //地址栏会有?pp=123
 */
export const updateUrlParams = (key: string, value?: string | number, url?: string) => { // 更新地址栏参数，不刷新页面
    const _url = url || window.location.href
    let newUrl
    if (!value) {
        newUrl = _url
    } else {
        const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i')
        const separator = _url.includes('?') ? '&' : '?'
        if (_url.match(re)) {
            newUrl = _url.replace(re, `$1${key}=${value}$2`)
        } else {
            newUrl = `${_url + separator + key}=${value}`
        }
    }

    if (!url) {
        // 向当前url添加参数，没有历史记录
        window.history.replaceState({
            path: newUrl,
        }, '', newUrl)
    }

    return newUrl // 返回更新后的url 或者 undefined 如果没有更新则不会执行下面的
}

/**
 * @function 字符串截取、字符串替换（例如手机号、身份证等号码隐藏）
 * @method strCut(str,start,len,rep)
 * @param {string}  str 为去要截取的字符串(类型为字符串)
 * @param {number}  start 为从第几位开始截取(不是下标)
 * @param {number}  [len] 截取的长度(不填从开始截取到最后)
 * @param {string}  [rep=''] 需要替换的字符（例如："*"）默认为空
 * @example
 * ```js
 * // 手机号码隐藏中间4位
 * const value = strCutReplace('18011223344', 4, 4, '*') // 180****3344
 * ```
 */
export const strCutReplace = (str: string, start: number, len: number, rep = '') => {
    if (str && (str.length - start) > 0) { // 判断开始截取的位置,字符串的长度需大于截取的长度
        let repStr = ''
        let repLength = 0
        if (len) {
            repLength = (str.length - start) > len ? len : (str.length - start) // 到最后能够替换字符的个数
        } else {
            repLength = str.length - start
        }

        // for (let i = 0; i < repLength; i++) {
        //   repStr += rep
        // }
        repStr = rep.repeat(repLength)
        // let repText = str.substr(start - 1, len); //截取（start-1）对应截取的位置
        const repText = str.substring(start - 1, start - 1 + len) // 截取（start-1）对应截取的位置
        const endStr = str.replace(repText, repStr) // 替换
        return endStr
    } else {
        return str
    }
}

/**
 * 数组元素移动位置，不改变原有数组
 * @param arr 需要改变的数组
 * @param nowIndex 需要移动项在当前数组里的下标
 * @param newIndex 移动到指定的位置（下标）
 * @returns
 * @example
 * ```js
 * // 将数组中2的那一项移动到最前面
 * const newArr = moveArraySite([0, 1, 2, 3], 2, 0)   // newArr：[2,0,1,3]
 *
 * ```
 */
export const moveArraySite = <T = any>(list: T[], nowIndex: number, newIndex: number) => {
    // 改动位置没变化时，直接返回原数组
    if (nowIndex === newIndex) return list

    /** splice 会更改原来数组的数据,所以使用map形成一个新数组 */
    /**  list.splice(oldIndex, 1)[0] 删除旧数据位置返回删除的数据 */
    /** list.splice(newIndex, 0, old)  相当于把删除的旧数据插入到新的位置上去 */
    const newArr = list.map(item => item)
    newArr.splice(newIndex, 0, newArr.splice(nowIndex, 1)[0])

    return newArr
}

/**
 * 根据文件名称判断文件类型
 * @param fileName {String} 文件名称地址
 * @returns
 * ```
 * getFileType('https://www.baidu.com/123.png') // image
 * // false:无后缀匹配
 * // image:匹配图片
 * // txt:匹配 txt
 * // excel:匹配 excel
 * // word:匹配 word
 * // pdf:匹配 pdf
 * // ppt:匹配 ppt
 * // video:匹配 视频
 * // radio:匹配 音频
 * // other:其他匹配项
 *
 * ```
 */
export const getFileType = function (fileName: string) {
    // 列举出文件的格式类型对象
    const obj = {
        image: ['png', 'jpg', 'jpeg', 'bmp', 'gif'], // 图片格式
        txt: ['txt'],
        excel: ['xls', 'xlsx'],
        word: ['doc', 'docx'],
        pdf: ['pdf'],
        ppt: ['ppt'],
        video: ['mp4', 'm2v', 'mkv'],
        radio: ['mp3', 'wav', 'wmv'],
        other: [] as string[],
    }

    // 后缀获取
    let suffix = ''

    // 取得obj对象里的key值类型
    type FileType = keyof typeof obj
    // 获取类型结果
    let result: FileType | false = false
    try {
        if (fileName.includes('?')) { // 判断url中有没有出现?
            fileName = fileName.substring(0, fileName.indexOf('?')) // 去除'?'后面部分
        }
        const fileArr = fileName.split('.')
        suffix = fileArr[fileArr.length - 1]
    } catch (err) {
        suffix = ''
    }
    // fileName无后缀返回 false
    if (!suffix) {
        result = false
        return result
    }

    for (const i in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
            const key = i as FileType
            const item = obj[key]
            if (item.includes(suffix)) {
                result = key
                break
            }
        }
    }

    // obj循环没有找到时，此时result是为false的
    return result || 'other'
}
