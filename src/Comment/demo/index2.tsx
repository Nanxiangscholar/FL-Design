import React from 'react'
import FlComment from '..'

export default () => {
  let date = new Date();
  let time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  // console.log(time);
  const actions = (
    <ul>
      <li>
        <span>Reply</span>
      </li>
    </ul>)
    const commentData = {
      actions,
    };
  return (
    <div>
      <FlComment
        {...commentData}>
          
        <FlComment
          avatar='http://concis.org.cn/images/swiper-img2.webp'
          {...commentData}>
          <FlComment 
          avatar='http://concis.org.cn/images/swiper-img3.webp' {...commentData}/>
          <FlComment 
          avatar='http://concis.org.cn/images/swiper-img4.webp' {...commentData}/>
        </FlComment>
      </FlComment>
    </div>
  )
}