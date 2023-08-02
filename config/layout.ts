// 主框宽度
export const mainWidth = 1200

export const layoutConfig = {
    mainWidth: '1200px',

}

export const bannerWid = {
    left: '230px', // 商品分类宽度
    banner: '720px', // banner宽度
    right: '250px', // banner右侧个人信息宽度
}

/**
 * 设置宽度，添加默认单位
 * @param val 值
 * @returns
 */
export const setWidth = (val?: number | string) => {
    if (!val) return ''
    return Number.isNaN(Number(val)) ? val : `${val}px`
}
