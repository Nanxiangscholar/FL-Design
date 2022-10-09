import React from 'react'
import '../Notice-chalk/notice.scss'
import ReactDOM from 'react-dom'
import { fl_tck } from '../notice';
import Popup from './popup';
Popup.prototype.info = info;
// 渲染真实DOM
function addInstance({ txt, type, typeswitch, style, clearable, event}: fl_tck) {
    let btn = event.target.previousSibling;
    // 创建dom 渲染 message虚拟dom
    let div = document.createElement('div');
    div.setAttribute('class', 'test');
    let buttons = clearable ? (
        <section>
            <button onClick={()=>{btn.removeChild(div) ,clearTimeout(bonn)}} className="fl-notice--no">取消</button>
            <button onClick={()=>{btn.removeChild(div) ,clearTimeout(bonn)}} className="fl-notice--yes">确认</button>
        </section>
    ) : "";
    ReactDOM.render(<Popup txt={txt} type={type} typeswitch={typeswitch} style={style} buttons={buttons} />, div);
    btn.appendChild(div);
    var bonn = setTimeout(() => {
        btn.removeChild(div)
    }, 5000) 
}
// 组件传值所用中间值
function info({ txt, type, typeswitch, style, clearable ,event}: fl_tck) {
    addInstance({ txt, type, typeswitch, style, clearable ,event})
}


export default Popup;