export interface treeType {
   title:string
   value:string
   group:number
   level?:number
   prev?:treeType | null
   height?:number
   disabled?:boolean
   checked?:boolean | string
   children?:Array<treeType>
   isChildren?:boolean
   isOff?:boolean
   callBack?:any
   Mychecked?:any
   dragStartTree?:any
   drop?:any
   dropOver?:any
   ele?:any
   avaDrop?:any
}



export type treeViewProps = {
    /**
     * @description Tree配置参数
     * @default default
     */
    treeData:Array<treeType>
    /**
     * className类名
     * @default --
     */
    className?:string
    /**
     * 是否禁用
     * @default false
     */
    disable?:boolean
    /**
     * 默认展开状态
     * @default boolean
     */
    defaultOpen?:boolean
    /**
     * 勾选回调函数
     * 参数一: 勾选的数据
     * 参数二: 所有数据
     * @default (tree,all)=>{}
     */
    callback?:any
    /**
     * 是否允许拖拽
     * @default false
     */
    avaDrop?:boolean
    /**
     * 拖拽回调函数
     * 参数一: 
     * 参数二: 
     * @default (tree,all)=>{}
     */
    dropCallback?:any
}

