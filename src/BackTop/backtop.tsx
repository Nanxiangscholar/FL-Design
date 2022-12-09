
type ReactNode=any

export  interface Props {
    /**
     * @description 自定义按钮内容
     * @default --
    */
     children?: ReactNode;


    /**
     * @description 回到顶部所需时间(ms)
     * @default 1000
    */
     duration?: number;

    /**
     * 需要监听滚动事件的目标元素
     * @default Window
    */
     target:HTMLElement | Window | Document|any;

    /**
     * 滚动距离大于该参数时才会显示按钮
     * @default 200
    */
     visibilityHeight?:any;

}