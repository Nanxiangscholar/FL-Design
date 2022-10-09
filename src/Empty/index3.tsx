import React from 'react'
import Empty1 from './demos/index1'
// import '../themes-chalk/Button.scss'
import './empty.scss'
import { Props } from './message/empty3'

export default function Empty({ image, imageStyle, type, text, src }: Props) {
    let props = [

        // image ? 'PRESENTED_IMAGE_SIMPLE' : 'PRESENTED_IMAGE_DEFAULT',
        // imageStyle ? 'is-disable' : '',
        // type ? 'ant-empty-image' + type : '',
        // text ? 'ant-empty-description' + text : '',
        src ? 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg' + src : ''

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
                    <div className='ant-empty-image'>
                        <img src="" alt={props.join(' ')} />
                    </div>

                    <div className='ant-empty-description'>Customize Description</div>
                    <div className="ant-empty-footer">
                        <button>{text}</button>
                    </div>
                </div>
            </div>
            <div className="code-box-meta"></div>

        </section>
    )
}
