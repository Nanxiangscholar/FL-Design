import React from 'react'
import success from '../img/成功.png'
import error from '../img/错误.png'

export default function Message({message}) {

    return (
        <div className='message' >
            <span className='icon'><img src={ message==='内容不能为空'?error:success} alt="" /></span>
            <span className='message-context'>{message}</span>
        </div>
    )
}
