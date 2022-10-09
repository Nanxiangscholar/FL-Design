import React from 'react'
import '../../themes/comment.scss'
import Button from '../../Button'
export default function Input({removeComment,removeComment1}) {
    console.log(removeComment1);
    return (
        <div className='fl-comment' id='input-comment'>
            <div className='fl-avatar'>
                <div className='fl-avatar-icon'>
                    <img src='http://concis.org.cn/images/swiper-img3.webp' alt="" />
                </div>
            </div>
            <div className='fl-comment-content'>
                <div className="fl-comment-content-header">
                    <div>
                        <span></span>
                    </div>
                    <span>
                        <textarea name="" id="" cols={30} rows={10} maxLength={30} >
                        </textarea>
                    </span>
                </div>
                <div className="fl-content"></div>
                <div className="fl-comment-content-actions">
                    <div className="fl-replay-action">
                        <Button text='Cancel' onClick={()=>removeComment()}/>
                        <Button type="primary" text='Reply' onClick={()=>removeComment1()} />
                    </div>
                </div>

            </div>
        </div>
    )
}
