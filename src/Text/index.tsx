import React from 'react'
import "./scss/Collapse.scss"
import { Props } from "./text"
export default function Text({ accordion, noBorder, header, text, arr, listKey, list, show, disabled }: Props) {
    let props = [
        'fl-',
        noBorder ? 'fl-' + noBorder : '',
        accordion ? 'fl-' + accordion : '',
    ]
    // console.log(arr);
    
    return (
        <div >
            <ul>
                <li>
                    <p onClick={() => { show!(listKey) } } className={disabled ? 'dis ' : ''}>
                        <span>icon</span>
                        <span>{header}</span>
                        </p>
                    <div  className={list ? 'ull' : 'lis'}>
                    {arr?arr.map((item: any, index: any) => {
                        return (
                            <span key={item + index}>{text}</span>
                        )
                    }):<></>}
                    </div>
                </li>
            </ul>
        </div>
    )
}