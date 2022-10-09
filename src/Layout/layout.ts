import Layout from './index';
export interface Props{
    /**
     * @description 类名
     * @default --
     */
    className?:string,
    /**
     * @description 内容
     * @default number
     */
    row?:number,
    /**
     * @description 内容
     * @default {}
     * @type object
     */
    extraStyle?:{ [k: string]: any },
    children?:any
}