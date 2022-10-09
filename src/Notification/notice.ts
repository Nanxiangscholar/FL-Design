export interface Props {
  /**
   * @description 状态类型
   * @default info
   */
  type?: "info" | "success" | "warning" | "error" | "normal" | "loading";

  /**
   * 文本内容
   * @default 空
   */
  text?: string;

  /**
     * 设置弹出框内容
     * @default string
     */
  txt?: string;

  /**
   * 自定义设置
   * @default {}
   */
  style?:object;

  /**
   * 是否启用禁止状态
   * @default false
   */
  typeswitch?: boolean;

  /**
   * 设置弹出框位置
   *  @default "topLeft"
   */
  direction?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

  /**
   * 设置是否存在操作按钮
   * @default false
   */
   clearable?: boolean

}
export interface fl_tck {
  txt?: string;
  type?: string;
  direction?: string
  typeswitch?: boolean;
  style?:object;
  clearable?: boolean;
  buttons?:any;
  event?:any;
  info?:any;
}