export interface Props {
  /**
   * @description 进行程度
   * @default default
  */
 data?:any ;
/**
* @description  副标题 
*  @default --
* */    
title?:string[] |  undefined;
/**
 * @description 说明
 * @default --
* */ 
explain?:string[] |  undefined ;
/**
 * 
* @description 函数func传参
@default --
* */    
func?:((a: string) => void) ;

   /**
     *@description 是否点击
     * @default  boolean
     * */ 
    pointerEvent?:boolean | string  | undefined;
    


}