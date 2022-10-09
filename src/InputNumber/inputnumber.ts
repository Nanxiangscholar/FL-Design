export interface Props {
    /**
     * @description 是否可在input中输入
     * @default false
     */
    isabled?: boolean;

    /**
     * 设置计数器允许的最小值
     * @default -1000
     */
    min: number;

    /**
     * 	设置计数器允许的最大值
     * @default 1000
     */
    max: number;

    /**
     * 	计数器步长
     * @default 1
     */
    step: number;

    /**
     * 	数值精度
     * @default 0
     */
     precision: number;

    /**
     * 	初始值
     * @default 1
     */
     numb: number;

}
  // 组件中不能使用原始事件