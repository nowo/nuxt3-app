import Crypto from 'crypto-js'

const { MD5 } = Crypto

/**
 * 签名加密 加密规则： 密钥+拼接字符串进行MD5加密
 * @param {string} secret  待加密的密钥
 * @param {string} str 用于混入密钥的字符串（一般用时间戳）
 * @returns 加密后的字符串
 * @example
 * ```javascript
 * setSignRule('0eb948223412170b5', new Date().getTime().toString())    // 0eb948223412170b50de9bb356d39e2b
 * ```
 */
export const setSignRule = (secret: string, str: string) => {
    // 第一次加密 （密钥+拼接字符串）进行MD5加密
    const key = secret + str
    const s = MD5(key).toString()
    // 第二次加密 (加密一次后的密钥取前面20个字符+拼接字符串取前面10个字符)进行MD5加密
    const key1 = s.substring(0, 20) + str.substring(0, 10)
    const s1 = MD5(key1).toString()

    return s1
}
