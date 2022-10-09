
export interface Props {
  /**
   * @description 状态类型
   * @default default
   */

  className?: string;

  /**
   * 加载状态
   * @default true
   */

  /**
      * 是否显示标题
      * @default true
      */
  title?: boolean;

  /**
   * 是否需要切换按钮
   * @default true
   */
     isChange?: boolean;


  loading?: boolean;

  /**
   * 显示头像
   * @default false
   */
  avatar?: boolean;

  /**
   * 自定义行数
   * @default 2
   */
  row?: number;

  /**
   * 自定义每行宽度
   * @default 100%
   */
  width?: (string | number)[];


  data?:any;

}