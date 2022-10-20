import { CSSProperties, ReactNode } from 'react';

export interface avatarProps {
  children?: ReactNode;
  /**
   * @description 类名
   * @default --
   */
  className?: string;

  /**
   * 头像自定义样式
   * @default {}
   */
  style?: CSSProperties;

  /**
   * 头像大小
   * @default 40px
   */
  size?: number;
  /**
   * 头像形状
   * @default circle
   */
  shape?: string;
  /**
   * 文本自适应
   * @default true
   */
  autoFixFontSize?: boolean;
  /**
   * 交互类型
   * @default button
   */
  triggerType?: 'mask' | 'button';
  /**
   * 	交互按钮图标
   * @default <></>
   */
  triggerIcon?: ReactNode;
  /**
   * 交互点击回调
   * @default --
   */
  triggerClick?: Function;
  /**
   * 按钮组样式
   * @default {}
   */
  groupStyle?: CSSProperties;
}