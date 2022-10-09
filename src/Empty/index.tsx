import React from 'react'
import Empty1 from './demos/index1'
// import '../themes-chalk/Button.scss'
import './empty.scss'
import { Props } from './message/empty'

export default function Empty({ image, imageStyle,type,text }: Props) {
    let props = [
        
       
        image ? 'PRESENTED_IMAGE_SIMPLE' : 'PRESENTED_IMAGE_DEFAULT',
        imageStyle ? 'is-disable' : '',
        type ? 'ant-empty-image'+type:'',
        text ? 'ant-empty-description'+text:''

    ]
    const imgStyle: React.CSSProperties = {
        width: "11rem",
        height: "7rem",
        backgroundColor: 'red'
    }

    return (
        <section className='code-box'>
            <div className="code-box-demo">
                <div className='ant-empty'>
                    <div className={props.join(' ')}></div>
                   
                    <div className='ant-empty-description'>暂无数据</div>
                    
                </div>
            </div>
            <div className="code-box-meta"></div>



        </section>
    )
}
