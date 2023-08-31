

/**
 *  查询菜单  - 请求
 */
declare interface MenuFindParam extends ListPage {
    title?: string;  // 菜单名称
}

/**
 *  创建菜单  - 请求
 */
declare interface MenuCreateParam {

    title: string;  // 菜单名称
    title_en: string;   // 菜单名称（英文）
    href: string;  // 链接地址
    sort: number; // 排序

}

/**
 *  修改菜单  - 请求
 */
declare interface MenuCreateParamEdit extends MenuCreateParam {
    id: number,
}




/**
 *  创建banner  - 请求
 */
declare interface BannerCreateParam {

    title: string;  // 菜单名称
    title_en: string;   // 菜单名称（英文）
    href: string;  // 链接地址
    sort: number; // 排序
    img:string; // 图片地址

}

/**
 *  修改banner   - 请求
 */
declare interface BannerCreateParamEdit extends BannerCreateParam {
    id: number,
}
