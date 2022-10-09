import React, { useState } from 'react'
import logo1 from '../img/dianzan.png'
import logo2 from '../img/xingxing.png'
import logo3 from '../img/dianzan1.png'
import logo4 from '../img/shoucang.png'
import FlComment from '..'

export default () => {
  let date = new Date();
  let time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  let [cont, setCont] = useState(false);
  let [star, setStar] = useState(false);
  function changeCont() {
    cont = !cont
    setCont(cont)
  }
  function changeStar() {
    star = !star
    setStar(star)
  }
  const actions = (
    <ul>
      <li onClick={changeCont}>
        <img src={cont ? logo3 : logo1} alt="" />
        <span>{cont ? 52 : 51}</span>
      </li>
      <li onClick={changeStar}>
        <img src={star ? logo4 : logo2} alt="" />
        <span>{star ? 13 : 12}</span>
      </li>
      <li>
        <span>Reply</span>
      </li>
    </ul>
  );
  const commentData = {
    datetime: time,
    align: 'right' as 'left' | 'right',
    actions,
  };
  return (
    <div>
      <FlComment {...commentData}/>
    </div>
  )
}