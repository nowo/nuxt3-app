
// 系统信息
declare interface ISystemInfoResponse {
    "id": 1,
    "title": "洛泰精密仪器（东莞）有限公司",
    "address": "广东省东莞市虎门镇太安路虎门段41号泰明商业大厦2栋",
    "logo": string,
    "logo2": string,
    "qrCode": "",
    "phone": "189-2553-8915",
    "email": "",
    "keyword": string,
    "description": string,
    "filing": "备案号： 粤ICP备2022043880号",
    "copyright": string,
    "createdAt": "2023-08-28T11:28:07.677Z",
    "updatedAt": "2023-08-29T05:48:19.291Z",
    "title_en": "Luotai Precision Instrument (Dongguan) Co., Ltd",
    "address_en": string,
    "filing_en": "",
    "copyright_en": ""
}


// 菜单
declare interface IMenuListResponse {
    id: number;
    p_id: number | null;
    icon: string | null;
    href: string | null;
    sort: number | null;
    title: string | null;
    title_en: string | null;
    createdAt: Date;
    updatedAt: Date;
}
