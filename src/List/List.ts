import { ReactNode } from "react";
export interface Props {
  
    /**
     * 头部内容
     * @defaultt list title
     */
    header?: ReactNode;

    /**
     * List数据
     * @default []
     */
    dataSource?:object[] | string[];
  
    /**
     * 列表尺寸
     * @default default
     */
    size?: string;

    /**
     * List 内部标签内容
     * @default A
     */
    text?: any;
    
    /**
     * 样式 lazyLoad | virtualList
     * @default --
     */
    style?: string;

    /**
     * 懒加载加载数据条数
     * @default --
     */
    defaultShowNum?: number;
    

  }