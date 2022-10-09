import React from 'react'
import '../themes/Button.scss'
import {Props} from './button'

export default function Button({type,text,size,disable,circle,onClick}:Props) {
    let props = [
        'fl-button',
        type?'fl-button--'+type:'',
        size?'fl-button--'+size:'',
        circle?'is-circle':'',
        disable?'is-disable':'',
    ]
  return (
    <button className={props.join(' ')} onClick={onClick}> 
        {text}
    </button>
  )
}
