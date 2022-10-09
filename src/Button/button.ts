export interface Props {
    /**
     * @description 状态类型
     * @default default
     */
    type?: string;
  
    /**
     * 文本内容
     * @default 空
     */
    text?: string;
  
    /**
     * 按钮大小
     * @default default
     */
    size?:string;
    /**
     * 是否启用禁止状态
     * @default false
     */
    disable?:boolean;
    /**
     * 是否为圆形按钮
     * @default false
     */
    circle?:boolean;
    /** 
     *  点击事件
     *  @default false
     */ 
    onClick?:()=>void;
  }
