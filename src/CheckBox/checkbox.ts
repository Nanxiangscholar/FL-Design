
export interface Props {
    /**
     * @description 类名
     * @default --
     */
    className?: string;
    /**
     * 文本内容
     * @default --
     */
    text: string;

    /**
     * 禁用
     * @default boolean
     */
    disabled?: boolean;

    /**
     * 是否选中状态
     * @default boolean
     */
    checked?: boolean;

    // /**
    //  * 是否选中状态
    //  * @default checkGroup[]
    //  */
    // group?: Array;

    // /**
    //  * 多选框选中回调函数
    //  * @default Function
    //  */
    // checkCallback?:--;

    // /**
    //  * 是否选中状态
    //  * @default Function
    //  */
    // checkGroupCallback?:--;
 
}