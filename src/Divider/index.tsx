import React from 'react'
import './Divider.scss'
import { Props } from './divider'
export default function Divider({ fontsize,flexBefore,flexAfter,children }: Props) {
  return (
    <>
      <div className='fl-divider'>
        <span className='fl-divider-before' style={{flex:flexBefore?flexBefore:''}}></span>
        <span className='fl-divider-middle' style={{fontSize:fontsize?fontsize:''}}>{children}</span>
        <span className='fl-divider-after'  style={{flex:flexAfter?flexAfter:''}}></span>
      </div>
    </>
  )
}
