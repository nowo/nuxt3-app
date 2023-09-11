
// 系统信息
declare interface ISystemInfoResponse {
    "id": 1,
    "title": "洛泰精密仪器（东莞）有限公司",
    "address": "广东省东莞市虎门镇太安路虎门段41号泰明商业大厦2栋",
    "logo": string,
    "logo2": string,
    qq: string,
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
    children?: IMenuListResponse[]
}

// 轮播图
declare interface ISlideListResponse {

    "id": 1,
    "title": "全套清洁度检测设备 全套清洁度检测设备",
    "title_en": "全套清洁度检测设备 全套清洁度检测设备",
    "img": "http://localhost:9008/upload/2023/8/31/1693443650057pnzugw.jpg",
    "href": "/",
    "sort": 0,
    "type": 1,
    "isHide": false,
    "createdAt": "2023-08-31T01:00:55.219Z",
    "updatedAt": "2023-08-31T01:00:55.219Z"

}



// 关于我们、联系我们信息
declare interface IAboutInfoResponse {
    "id": 1,
    "title": "",
    "title_en": "",
    "img": "http://localhost:9008/upload/2023/9/8/169413632560359vj4b.jpg",
    "content": "<p style=\"text-indent: 2em; text-align: start;\"><span style=\"color: rgb(38, 38, 38);\"><strong>东莞市捷布鲁科技有限公司(捷布鲁JETBLUE)是一家专业从事汽车零部件清洁度检测仪器，自动清洁度分析系统,清洁度检测自动清洗萃取设备等清洁度检测配套分析测试仪器及其软件研发、制造、销售为一体的科技型企业。</strong></span></p><p style=\"text-align: start;\"><strong> &nbsp; &nbsp; &nbsp;经过多年的不断耕耘，公司自主研发生产的JYBLU-100ZD自动清洁度检测分析系统,JYBLU-767清洁度检测自动清洗萃取设备等多款产品已经形成产品系列化,规格多元化且广泛应用于燃油汽车及其部件制造、新能源汽车及其部件制造、航空航天器材及其部件制造、5G终端产品制造等众多精密加工制造领域。</strong></p><p style=\"text-align: start;\"><strong> &nbsp; &nbsp; &nbsp;公司在深圳设有研发中心:深圳洁布鲁科技，先后在浙江、重庆、上海、江苏设立直属分支机构，构建了覆盖主要市场的行销网络。</strong></p><p style=\"text-align: start;\"><strong> &nbsp; &nbsp; &nbsp;捷布鲁宗旨：不止于质量</strong></p><p style=\"text-align: start;\"><strong> &nbsp; &nbsp; &nbsp;捷布鲁愿景：做行业技术创新者！</strong></p>",
    "content_en": "<p>eng</p>",
    "type": 1,
    "createdAt": "2023-08-31T05:45:27.187Z",
    "updatedAt": "2023-09-08T01:25:35.977Z"
}