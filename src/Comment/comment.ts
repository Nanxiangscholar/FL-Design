import { ReactNode } from "react";

export interface Props {

    /** 
    * @description 评论内容
    * @default --
 
    */
    content?: string;
    /**
     * 时间描述
     * @default --
     */
    datetime?: string;

    /**
     * 作者名
     * @default --
     */
    author?: string;

    /**
     * 头像路径
     * @default --
     */
    avatar?:string;
    // onClick?: () => {};
    /**
     * 嵌套子评论
     * @default --
     */
     children?:any

     /**
      * 对齐方式
      * @default left
      */
    align?:"left" | "right" ;

    /**
     * 作者名后的额外内容
     * @default --
     */
     afterAuthor?:ReactNode

     /**
      * 底部配置
      * @default --
      */
     actions?:ReactNode
    
}