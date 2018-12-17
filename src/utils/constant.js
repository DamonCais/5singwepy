/**
 * 用户code 换取 session_key
 * @type {String}
 */
export const USER_SPECICAL_INFO = "userSpecialInfo";

/**
 * 用户信息
 * @type {String}
 */
export const USER_INFO = "userInfo";

/**
 * 系统信息
 * @type {String}
 */
export const SYSTEM_INFO = "systemInfo";


export const ADDRESS_ID = "addressId";

export const SEL_CLASS_CODE = "selClassCode";
export const FILTER_LIST = [
    {
        type: 'radio',
        label: '型号',
        value: 'size',
        children: [{
            label: '小型',
            value: 'small',
        },
        {
            label: '大型',
            value: 'big',
        },
        ],
        groups: ['001'],
    },
    {
        type: 'sort',
        label: '价格',
        value: 'stars',
        groups: ['002']
    },
    {
        type: 'filter',
        label: '筛选',
        value: 'filter',
        children: [
            {
                type: 'radio',
                label: '颜色',
                value: 'color',
                children: [{
                    label: '红色',
                    value: 'red',
                },
                {
                    label: '白色',
                    value: 'html',
                },
                {
                    label: '黑色',
                    value: 'css',
                },
                {
                    label: '紫色',
                    value: 'typescript',
                },
                ],
            },
            {
                type: 'radio',
                label: '租车方式',
                value: 'away',
                children: [{
                    label: '月租',
                    value: '1',
                },
                {
                    label: '日租',
                    value: '2',
                },
                {
                    label: '全额购买',
                    value: '3',
                },
                ],
            },
            {
                type: 'checkbox',
                label: '附加服务',
                value: 'query',
                children: [{
                    label: '头盔',
                    value: 'angular',
                },
                {
                    label: '雨衣',
                    value: 'vue',
                },
                {
                    label: '电子锁',
                    value: 'react',
                },
                {
                    label: '配送箱',
                    value: 'avalon',
                },
                {
                    label: '定位',
                    value: 'gps',
                },
                ],
            },
        ],
        groups: ['003'],
    },
];