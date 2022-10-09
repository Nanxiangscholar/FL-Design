
export interface Props {
  /**
   * @description 星星个数
   * @default 5
   */

  num?: number;


  /**
      * 星星颜色
      * @default yellow
      */
   color?: string;

  /**
   * 默认选中个数
   * @default 3
   */
   defaultShow?: number;


  /**
   * 是否只读
   * @default false
   */
   readonly?: boolean;

   data?:any
}