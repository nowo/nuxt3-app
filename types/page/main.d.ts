
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



// 新闻
declare interface INewsResponse {
    "id": 1,
    "title": "清洁度检测标准ISO16232和VDA",
    "title_en": "",
    "author": "tong",
    "describe": "检测目的：通过标准的方法来验证产品的清洁度是否符合相关行业的限值要求。检测意义：对于精密零部件,产品表面残留的微小颗粒物超出规定的限值会直接影响产品在装配时的紧密度,并且使产品的磨损老化加速。通过清洁度检测并规定其限值，可大大减轻颗粒磨损造......",
    "describe_en": "",
    "content": "<p style=\"text-align: start;\"><img src=\"https://img.11467.com/2022/09-19/1175419057.jpg\" alt=\"\" data-href=\"\" style=\"\"><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">检测目的：通过标准的方法来验证产品的清洁度是否符合相关行业的限值要求。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">检测意义：对于精密零部件,产品表面残留的微小颗粒物超出规定的限值会直接影响产品在装配时的紧密度,并且使产品的磨损老化加速。通过清洁度检测并规定其限值，可大大减轻颗粒磨损造成的损害，提高整机运行寿命和可靠性，减少对整机的危害如：滤芯堵塞，回路流量减小，密封材料、隔膜的异常磨损，积存大量污垢造成工作不可靠，电磁转换阀的工作不可靠或烧损等。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">应用范围：汽车发动机及其零部件，航空滤油器，仪器零部件，电子产品组装件，油液等。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">参考标准：</span></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">ISO 16232 道路车辆--流体回路零部件的清洁</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">VDA 19工艺清洁度的检验–汽车功能零部件的颗粒污染物</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">PV 3370 自动传动和外围组件外来污染物的测试</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">ISO 4406 液压传动 油液 固体颗粒污染等级代号法</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">杂质萃取方法：一般有晃动萃取法，压力冲洗法，超声波清洗法。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">晃动萃取法：原理是在样品内加入适量的萃取液，并密封开口，晃动整个样品，使得样品内部颗粒受萃取液冲刷，从而达到萃取的效果。晃动萃取主要受晃动的次数与时间影响，适用于内部清洗的样品。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">压力冲洗法：原理是使用一定压力的萃取液，对样品进行冲洗，达到萃取颗粒物的效果。压力冲洗主要影响因素：冲洗压力大小、冲洗距离及角度、清洗时间、单位面积的液体用量。适用于样品外部以及可接触的内部。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">超声波清洗法：原理是经由液体介质传导的超声波，在一定频率范围内的机械振动作用到样品的表面上，利用空化效应使得颗粒物脱离，达到萃取的效果。因此，超声波萃取过程需要将样品浸入选定萃取液，置于超声波清洗机内进行。影响超声波萃取效果主要有超声频率、时间等因素，适用于试样外部以及萃取液能够进入的样品内部。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">过滤：真空过滤法，将萃取后的液体过滤到适合孔径的滤膜上。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">常用分析方法：</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">重量法：称重法是一种生产和实验中常用的清洁度检测方法。其原理是使用选定的清洗液在一定条件下对样品进行清洗。将清洗后的液体通过一定孔径的滤膜进行过滤（常用的滤膜孔径有1μm，5μm，10μm，20μm，150μm等）。使得颗粒物收集在滤膜表面。对过滤前后的滤膜烘干秤重，两次质量差即为杂质质量。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">颗粒尺寸数量分析法：是一种清洁度测试的新方法。其基本原理是根据被检测的表面与污染物颗粒具有不同的光吸收或散射率其杂质收集方法与重量法相同，待滤膜干燥后，使用显微镜(设备是具有拍摄功能的图像识别和分析设备)在光照射下检测，按颗粒尺寸和数量统计污物颗粒，即可得到所测物体零件的固体颗粒污染物结果。这是一种适合精密清洗定量化的清洁度检测方法，尤其适用于检测微小颗粒和带色杂质颗粒。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">除了杂质质量分析和尺寸数量分析外，还可以通过SEM/EDS分析与FTIR分析，分析出金属颗粒和非金属颗粒的具体成分，以便找到颗粒污染物的来源。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">为什么要做 VDA19.1 颗粒清洁度：</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">微粒子对汽车行业、航空航天、精密制造、液压装置等危害极大。污染物会加速零件磨损，</span><br></p><p style=\"text-align: start;\">堵塞元件的节流孔使元件失去调节功能，会进入滑阀间隙使阀门芯卡死，</p><p style=\"text-align: start;\">会拉伤油缸内表面使泄漏增加或使输出力减小，会损坏泵的配油盘使烧伤或卡死，</p><p style=\"text-align: start;\">会导致电子元器件线路板等短路从而导致失效，这些都会导致系统功能的丧失或瘫痪</p><p style=\"text-align: start;\">清洁度参考标准：VDA19.1、ISO16232</p><p style=\"text-align: start;\"><span style=\"color: inherit;\">VDA19.1 颗粒清洁度测试流程</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">VDA19.1颗粒清洁度判定指标</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">清洁度是指产品规定部位的清洁程度其定义是指零件、总成及整机“规定部位”的清洁程度或被杂质污染的程度。用从规定部位以及规定方法采集到杂质微粒的质量、大小和数量来表示，“规定部位”是指危及产品可靠性的特征部位。“杂质”包括产品设计、制造、运输、使用和维修过程中，本身残留的、外界混入的和系统生成的全部杂质。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">零件清洁度测试是提升产品可靠性的重要手段之一</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">德国汽车工业协会在2015年3月发布了关于颗粒物清洁度测试标准的*版VDA 19.1。该文解析了VDA19.1中颗粒物清洁度测试的各个关键步骤，并对VDA 19.1中提出的如何提高不同设备之间清洁度分析结果的可对比性做了介绍。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">汽车行业中关于清洁部件的要求，早是由罗伯特·博世公司(RobertBosch)在1996年为了提高柴油汽车发动机共轨喷射系统的生产质量而提出的，他们在生产流程中发现小喷嘴很容易被系统中残留的污染颗粒堵塞，因此提出了生产中清洁部件的质量规范，由此诞生了零部件清洁度测试标准。此后，在汽车系统中很多可靠性问题都被归因于微粒子污染，即零部件清洁度不足。</span></p>",
    "content_en": "<p style=\"text-align: start;\"><img src=\"https://img.11467.com/2022/09-19/1175419057.jpg\" alt=\"\" data-href=\"\" style=\"\"><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">检测目的：通过标准的方法来验证产品的清洁度是否符合相关行业的限值要求。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">检测意义：对于精密零部件,产品表面残留的微小颗粒物超出规定的限值会直接影响产品在装配时的紧密度,并且使产品的磨损老化加速。通过清洁度检测并规定其限值，可大大减轻颗粒磨损造成的损害，提高整机运行寿命和可靠性，减少对整机的危害如：滤芯堵塞，回路流量减小，密封材料、隔膜的异常磨损，积存大量污垢造成工作不可靠，电磁转换阀的工作不可靠或烧损等。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">应用范围：汽车发动机及其零部件，航空滤油器，仪器零部件，电子产品组装件，油液等。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">参考标准：</span></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">ISO 16232 道路车辆--流体回路零部件的清洁</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">VDA 19工艺清洁度的检验–汽车功能零部件的颗粒污染物</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">PV 3370 自动传动和外围组件外来污染物的测试</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">ISO 4406 液压传动 油液 固体颗粒污染等级代号法</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">杂质萃取方法：一般有晃动萃取法，压力冲洗法，超声波清洗法。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">晃动萃取法：原理是在样品内加入适量的萃取液，并密封开口，晃动整个样品，使得样品内部颗粒受萃取液冲刷，从而达到萃取的效果。晃动萃取主要受晃动的次数与时间影响，适用于内部清洗的样品。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">压力冲洗法：原理是使用一定压力的萃取液，对样品进行冲洗，达到萃取颗粒物的效果。压力冲洗主要影响因素：冲洗压力大小、冲洗距离及角度、清洗时间、单位面积的液体用量。适用于样品外部以及可接触的内部。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">超声波清洗法：原理是经由液体介质传导的超声波，在一定频率范围内的机械振动作用到样品的表面上，利用空化效应使得颗粒物脱离，达到萃取的效果。因此，超声波萃取过程需要将样品浸入选定萃取液，置于超声波清洗机内进行。影响超声波萃取效果主要有超声频率、时间等因素，适用于试样外部以及萃取液能够进入的样品内部。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">过滤：真空过滤法，将萃取后的液体过滤到适合孔径的滤膜上。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">常用分析方法：</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">重量法：称重法是一种生产和实验中常用的清洁度检测方法。其原理是使用选定的清洗液在一定条件下对样品进行清洗。将清洗后的液体通过一定孔径的滤膜进行过滤（常用的滤膜孔径有1μm，5μm，10μm，20μm，150μm等）。使得颗粒物收集在滤膜表面。对过滤前后的滤膜烘干秤重，两次质量差即为杂质质量。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">颗粒尺寸数量分析法：是一种清洁度测试的新方法。其基本原理是根据被检测的表面与污染物颗粒具有不同的光吸收或散射率其杂质收集方法与重量法相同，待滤膜干燥后，使用显微镜(设备是具有拍摄功能的图像识别和分析设备)在光照射下检测，按颗粒尺寸和数量统计污物颗粒，即可得到所测物体零件的固体颗粒污染物结果。这是一种适合精密清洗定量化的清洁度检测方法，尤其适用于检测微小颗粒和带色杂质颗粒。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">除了杂质质量分析和尺寸数量分析外，还可以通过SEM/EDS分析与FTIR分析，分析出金属颗粒和非金属颗粒的具体成分，以便找到颗粒污染物的来源。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">为什么要做 VDA19.1 颗粒清洁度：</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">微粒子对汽车行业、航空航天、精密制造、液压装置等危害极大。污染物会加速零件磨损，</span><br></p><p style=\"text-align: start;\">堵塞元件的节流孔使元件失去调节功能，会进入滑阀间隙使阀门芯卡死，</p><p style=\"text-align: start;\">会拉伤油缸内表面使泄漏增加或使输出力减小，会损坏泵的配油盘使烧伤或卡死，</p><p style=\"text-align: start;\">会导致电子元器件线路板等短路从而导致失效，这些都会导致系统功能的丧失或瘫痪</p><p style=\"text-align: start;\">清洁度参考标准：VDA19.1、ISO16232</p><p style=\"text-align: start;\"><span style=\"color: inherit;\">VDA19.1 颗粒清洁度测试流程</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">VDA19.1颗粒清洁度判定指标</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">清洁度是指产品规定部位的清洁程度其定义是指零件、总成及整机“规定部位”的清洁程度或被杂质污染的程度。用从规定部位以及规定方法采集到杂质微粒的质量、大小和数量来表示，“规定部位”是指危及产品可靠性的特征部位。“杂质”包括产品设计、制造、运输、使用和维修过程中，本身残留的、外界混入的和系统生成的全部杂质。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">零件清洁度测试是提升产品可靠性的重要手段之一</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">德国汽车工业协会在2015年3月发布了关于颗粒物清洁度测试标准的*版VDA 19.1。该文解析了VDA19.1中颗粒物清洁度测试的各个关键步骤，并对VDA 19.1中提出的如何提高不同设备之间清洁度分析结果的可对比性做了介绍。</span><br></p><p style=\"text-align: start;\"><span style=\"color: inherit;\">汽车行业中关于清洁部件的要求，早是由罗伯特·博世公司(RobertBosch)在1996年为了提高柴油汽车发动机共轨喷射系统的生产质量而提出的，他们在生产流程中发现小喷嘴很容易被系统中残留的污染颗粒堵塞，因此提出了生产中清洁部件的质量规范，由此诞生了零部件清洁度测试标准。此后，在汽车系统中很多可靠性问题都被归因于微粒子污染，即零部件清洁度不足。</span></p>",
    "img": "http://localhost:9008/upload/2023/8/31/1693465126951cbycq5.png",
    "sort": 0,
    "isHide": false,
    "type": 1,
    "createdAt": "2023-08-31T06:59:35.000Z",
    "updatedAt": "2023-08-31T06:59:35.000Z",
    read:number,    // 阅读量
}

declare interface INewsResponseList{
    list:INewsResponse[],
    total:number
}
