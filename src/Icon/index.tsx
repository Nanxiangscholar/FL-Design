import React from 'react'
import '../themes/Button.scss'
import Props from './Icon';



export default function FLIcon({fl,size}:Props) {   
  return (
    <div>
      <img src={fl} width={size}/>
    </div>
  )
}
