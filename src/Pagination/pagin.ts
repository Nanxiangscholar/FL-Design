interface Props {
    /**
     * @description 总数据条数
     * @default 0
     */
    totals: Number,
    /**
     * 可以选择每页的条数的select框
     * @default false
     */
    showSizeChanger?: Boolean,
    /**
     * 显示跳转页面输入框
     * @default false
     */
    showJumpInput?:Boolean,
    /**
     * 每页条数配置
     * @default 每页10条数据
     */    
    pageSizeOptions?:number,
    /**
     * 父盒子类名
     * @default ---
     */       
    classNames?:string
}
