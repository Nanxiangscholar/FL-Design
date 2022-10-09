
export interface Props{
	children: any;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 默认选中索引
   * @default 0
   */
  value?: Number;
  /**
   * @description 禁用
   * @default 0
   */
  disabled?: Boolean;
  /** yf
   * @description 支持手动扩展
   * @default false
   */
  canAddOption?: Boolean;
  /**
   * @description 扩展按钮文案
   * @default 'More...'
   */
   addOptionText?: Boolean;
  /**
   * @description 方形样式
   * @default false
   */
  boxStyle?: Boolean;
  /**
   * @description 选项改变回调函数
   */
  onChange?: Function;
}