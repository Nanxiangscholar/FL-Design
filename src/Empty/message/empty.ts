export interface Props {
    /**
     * @description 状态类型
     * @default -
     */
    description?: {} | null | undefined;

    /**
     * 文本内容
     * @default Empty.PRESENTED_IMAGE_DEFAULT
     */
    image?: {} | null | undefined;

    /**
     * 按钮大小(medium,small,mini)
     * @default -
     */
    imageStyle?: void;

    /**
     * @description 状态类型
     * @default default
     */
    type?: string;

    /**
     * @description 状态类型
     * @default default
     */
    text?: string;
}