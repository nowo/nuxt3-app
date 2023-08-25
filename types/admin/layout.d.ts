
declare interface LayoutMenuItem {
    name: string;    // 菜单名称
    path: string;    // 菜单链接
    icon: string;    // 菜单图标
    children?: LayoutMenuItem[];
}