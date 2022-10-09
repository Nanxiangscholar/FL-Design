export interface Props {
    
  
   
  
   
    /**
     * 是否启用禁止状态
     * @default false
     */
    disabled?: boolean;
    
   /**
     * 点击事件
     *  @default undefined
     */
    onClick?: () => void;

    /**
     * 列表配置项
     *  @default --
     */
    option?:Array<any>;

/**
     * 列表配置项中的文字
     *  @default --
     */
    label?:string;
/**
     * 方位 `top,bottom,left,right`
     *  @default right
     */
    align?:string;
/**
     * 聚焦事件
     *  @default --
     */
    ffocus?:Function;
    
    /**
     * 文本框清空回调函数
     *  @default --
     */
     clean?:Function;

  
    /**
     * 文本框改变回调函数
     *  @default --
     */
     chac?:Function;

  
  }

  // 组件不能使用原始事件