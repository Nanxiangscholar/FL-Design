

   
   

export interface Props {
  /**
   * @description 是否禁用按钮
   * @default false
   */

  disabled?: boolean;

  /**
      * 是否为小型按钮
      * @default false
      */
   small?: boolean;

  /**
   * 是否默认选中
   * @default true
   */
   defaultChecked?: boolean;

  /**
   * 加载状态
   * @default false
   */
   loading?: boolean;

  /**
   * 回调函数
   * @default function
   */
   CallbackFunction?: Function;

   

}