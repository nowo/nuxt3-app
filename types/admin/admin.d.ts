
declare interface UserOptionItem {
    id: number;
    username: string | null;
    account: string | null;
    password: string | null;
    avatar: string | null;
    status: number | null;
    createdAt: Date;
    updatedAt: Date;
}

/**
 *  查询用户  - 请求
 */
declare interface AdminFindParam extends ListPage{

    username?: string;  // 用户名
    account?: string;   // 登录账号
    status?: number | ''; // 是否启用

}

/**
 *  创建用户  - 请求
 */
declare interface AdminCreateParam{

    username: string;  // 用户名
    account: string;   // 登录账号
    password: string;  // 登录密码
    status: number | ''; // 是否启用

}


/**
 *  用户登录  - 请求
 */
declare interface AdminLoginDataType {
    account: string
    password: string
}


/**
 *  修改密码  - 请求
 */
declare interface AdminPasswordParam{

    password: string;  // 原登录密码
    newPassword: string; // 新密码

}