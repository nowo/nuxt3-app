function generateAlphabets(n: number) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const combinations: string[] = []

    if (n <= 0) {
        return combinations
    }

    for (let i = 0; i < alphabets.length; i++) {
        const letter = alphabets[i]

        if (n === 1) {
            combinations.push(letter)
        } else {
            const suffixes = generateAlphabets(n - 1)

            for (let j = 0; j < suffixes.length; j++) {
                combinations.push(letter + suffixes[j])
            }
        }
    }

    return combinations
}

// async / await 方法调用定时器
export const wait = (ms: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(ms)
        }, ms)
    })
}

const fetchData = async (data?: string) => {
    if (!data) return
    const res = await fetch('https://github.com/signup_check/username', {
        credentials: 'include',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0',
            'Accept': '*/*',
            'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
            'Content-Type': 'multipart/form-data; boundary=---------------------------336113413416034034122601161078',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
        },
        referrer: 'https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home',
        body: `-----------------------------336113413416034034122601161078\r\nContent-Disposition: form-data; name="authenticity_token"\r\n\r\nL8J4ejV768fWyxlAe1QPRATzG6yB9o0zPOFcc7MQ+uNVj/bMa6u4jWElsUIrKtGrJykH4+dLGv15J8Hqidu+uQ==\r\n-----------------------------336113413416034034122601161078\r\nContent-Disposition: form-data; name="value"\r\n\r\n${data}\r\n-----------------------------336113413416034034122601161078--\r\n`,
        method: 'POST',
        mode: 'cors',
    })
    return res
}

export default defineEventHandler(async () => {
    const combinations = generateAlphabets(2)
    console.log('combinations :>> ', combinations)
    await fetchData()

    const res = await fetch('https://github.com/signup_check/username', {
        credentials: 'include',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0',
            'Accept': '*/*',
            'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
            'Content-Type': 'multipart/form-data; boundary=---------------------------336113413416034034122601161078',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
        },
        referrer: 'https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home',
        body: '-----------------------------336113413416034034122601161078\r\nContent-Disposition: form-data; name="authenticity_token"\r\n\r\nL8J4ejV768fWyxlAe1QPRATzG6yB9o0zPOFcc7MQ+uNVj/bMa6u4jWElsUIrKtGrJykH4+dLGv15J8Hqidu+uQ==\r\n-----------------------------336113413416034034122601161078\r\nContent-Disposition: form-data; name="value"\r\n\r\ncooj\r\n-----------------------------336113413416034034122601161078--\r\n',
        method: 'POST',
        mode: 'cors',
    })

    return res

    // const b = '404 “This is not the web page you are looking for”'

    // const t = await Promise.all(combinations.map(async (item) => {
    //   await wait(1000)
    //   try {
    //     const res = await $fetch<string>(`https://github.com/${item}`)
    //     if (res.indexOf(b)) return item
    //     else return null
    //   } catch (error) {
    //     console.log('error :>> ', error)
    //     return item
    //   }
    // }))
    // // console.log('t :>> ', t)
    // const arr = t.filter(item => !!item)
    // // console.log('arr :>> ', arr)
    // // const res = await $fetch<string>('https://github.com/posa1564561151666122112')
    // // console.log('res :>> ', res)
    // // const b = '404 “This is not the web page you are looking for”'
    // // if (res.indexOf(b)) {
    // //   console.log('res :>> ', res)
    // // }
    // return {
    //   // res,
    //   // b: res.indexOf(b),
    //   arr,
    // }
})
