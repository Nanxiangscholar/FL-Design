export interface Swiper {
    /**
    * @description 状态类型
    * @default default
    */
    type?: string;

    /**
     *  文本内容
     * @default 空
     * */
    text?: string;

    /**
     * 按钮大小
     * @default default
     */
    size?: string;

    /**
     * 按钮大小
     * @default false
     */
    disable?: boolean;

    /**
     * 按钮圆角
     * @default false
     */
    circle?: boolean;

    /**
     * 点击事件
     * @default undefined
     */
    onClick?: () => void;
}
//组件不能使用原始事件
