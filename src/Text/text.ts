import { ReactNode } from "react";

export interface Props {
    /**
     * @description 类名
     * @default --
     */
    className?:string;
    /**
     * 默认展开列表
     * @default []
     */
    defaultActive?:(string|number)[];
    /**
     * 头部内容
     * @default [] 
     */
    header?:any;
    /**
     * 是否展开内容开关
     * @default Function 
     */
     show?:(index:any)=>void;
     /**
     * 是否展开内容
     * @default false 
     */
      list?:boolean;
    /**
     * 展开内容
     * @default 空
     */
    text?:string;
    /**
     * 展开内容数量
     * @default 空
     */
    arr?:any;
    /**
     * 层级下标
     * @default 1
     */
    listKey?:string|number;
    /**
     * 禁止展开
     * @default false
     */
    disabled?:boolean;
    /**
     *头部右侧内容
     @default <></>
     */
    extra?:ReactNode;
    /**
     * 手风琴
     * @default 空
     */
    accordion?:any;
    /**
     * 无边框
     * @default 空
     */
    noBorder?:any;
    /**
     * 头部对齐方式
     * @default left
     */
    headerAlign?:string;
    /**
      * 懒加载
      * @default 空
      */
    lazyLoad?:any;
    /**
     * 切换回调函数，返回打开列表的listKey
     * @default --
     */
     toggleCallback?:Function;
}