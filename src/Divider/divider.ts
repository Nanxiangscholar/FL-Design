export interface Props {
  /**
   * @description 字体大小
   * @default string
   */
  fontsize?: string;
  /**
   *  文本内容
   * @default string
   */
  text?: string;
  /**
   * 前边分割线比例
   * @default number
   */
  flexBefore?:number;
  /**
   * 后边分割线比例
   * @default number
   */
  flexAfter?:number;
  children?:any
}
