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

    return {
        menuList,
        getMenuList,
    }
}
