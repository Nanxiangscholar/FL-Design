export interface Props {
    /**
     * 选择器数据
     * @default []
     */
    option?: Array<any>;

    /**
     * 类名
     * @default --
     */
    className?: string;


    /**
     * 可输入
     * @default 请输入
     */
    placeholder?: string;

    /**
    * 禁止
    * @default false
    */
    disable?: boolean;

    /**
        * 只读
        * @default false
        */
    readOnly?: boolean

    /**
        * 加载
        * @default false
        */
    loading?: boolean

    /**
            * 加载
            * @default false
            */
    showSearch?: boolean
}
