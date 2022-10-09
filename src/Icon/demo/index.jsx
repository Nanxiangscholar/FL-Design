import React from 'react';
import Icon from '../index'
import {
  logoApple,
  logoPlaystation,
  logoFacebook,
  logoSteam} from '../fontIcon/index.mjs'

export default ()=> {
  return (
    <div style={{display:'flex',gap:'10px 10px',flexWrap:'wrap'}}>
     
      <Icon fl={logoApple} size={40}></Icon>
      <Icon fl={logoPlaystation} size={40}></Icon>
      <Icon fl={logoFacebook} size={40}></Icon>
      <Icon fl={logoSteam} size={40}></Icon>

    </div>
  )
}
