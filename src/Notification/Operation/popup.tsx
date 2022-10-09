import React, { useState } from 'react'
import { fl_tck } from '../notice';
 function Popup({ txt, type, typeswitch, style, buttons }: fl_tck) {
    let [typesucc, typesuccess] = useState(type)
    // 修改状态
    if (typeswitch) {
        let succ = setTimeout(() => {
            typesuccess("success")
            clearTimeout(succ);
        }, 2000)
    }
    return (
        <div className='fl-notice' style={style}>
            <div>
                <span>{typesucc}</span>&#x3000;
                <span>Notice</span>
            </div>
            <p>{txt}</p>
            <div>{buttons}</div>
        </div>
    )
}
export default Popup;