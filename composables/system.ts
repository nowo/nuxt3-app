// 获取系统信息
export const useSystemState = () => {
    const system = useState<ISystemInfoResponse | undefined>('system')

    const getSystemInfo = async (update?: boolean) => {
        if (system.value) return system
        const { data, error } = await useCustomFetch<ISystemInfoResponse>('/api/page/get_system')
        // console.log(data.value?.code)
        // 接口发生错误时
        if (error.value) return system
        // await wait(800)
        if (data.value) {
            system.value = data.value
        } else {
            ElMessage.error('网络错误')
        }
        return system
    }

    return {
        system,
        getSystemInfo,
    }
}

export const useMenuState = () => {
    const route = useRoute()
    const menuList = useState<IMenuListResponse[]>('menu', () => [])

    const getMenuList = async (update?: boolean) => {
        if (menuList.value.length) return menuList
        const { data, error } = await useCustomFetch<IMenuListResponse[]>('/api/page/get_menu')

        // 接口发生错误时
        if (error.value) return menuList
        // await wait(800)
        if (data.value) {
            menuList.value = data.value
        } else {
            ElMessage.error('网络错误')
        }
        return menuList
    }

    // 当前页菜单内容
    const activeMenu = computed<IMenuListResponse | undefined>(() => {
        // [id].vue 的问价，不能直接拿route.path来进行比较
        const path = route.matched[0].path.split('/:')[0]
        return menuList.value.find(item => item.href === path || `/en${item.href}` === path)
    })

    return {
        activeMenu,
        menuList,
        getMenuList,
    }
}
