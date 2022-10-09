import React, { useState } from 'react'
import '../themes/comment.scss'
import { Props } from './comment'
export default function FlComment({ author, datetime, content,children,avatar,align,afterAuthor,actions}: Props ) {
    let props = {
        author: author ? author : 'Concis',
        datetime: datetime ? datetime : '2022-7-24',
        content: content ? content : 'Hello Concis,coding is life,comment body content.',
        avatar: avatar ? avatar : "http://concis.org.cn/images/swiper-img1.webp",
    }
    
    
    return (
        <div className='fl-comment'>
            <div className='fl-avatar'>
                <div className='fl-avatar-icon'>
                <img src={props.avatar} alt="" />
                </div>
            </div>
            <div className='fl-comment-content'>
                <div className="fl-comment-content-header" style={{
                    'justifyContent': align === undefined?'flex-start':align === 'left' ? 'flex-start' : 'space-between',
                }as any}>
                    <div>
                        <span>{props.author}</span>
                        {afterAuthor} 
                    </div>
                    <span>{props.datetime}</span>
                </div>
                <div className="fl-content">{props.content}</div>
                <div className="fl-comment-content-actions">
                    
                        {actions}
                        
                    
                </div>
                {children}
            </div>
        </div>
    )
}
