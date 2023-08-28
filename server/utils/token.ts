import jwt from 'jsonwebtoken'

// 生成token
export const createToken = (data: any) => {
    const token = jwt.sign(data, 'app.config.jwt.secret',
        // {
        //     expiresIn: app.config.jwt.sign.expiresIn,
        // },
    )
    return token
}

// 解析token
export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, 'app.config.jwt.secret')
    } catch (error) {
        return false
    }
}
