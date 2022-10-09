import React from 'react'
import Flpopup from './Operation'
import { Props } from './notice'
export default function Notice({ type, text, txt, direction, typeswitch, style, clearable }: Props) {
  let props = [
    'fl-btnnotice',
    type ? 'fl-btnnotice--' + type : '',
  ]
  let btnprop = [
    'fl-btn',
    direction? "fl-btn--" + direction : "fl-btn--topRight"
  ]

  return (
    <div className='btns'>
      <div className={btnprop.join(" ")}></div>
      <button
        onClick={(event) => { Flpopup.prototype.info({ txt, type, direction, typeswitch, style, clearable ,event}) }}
        className={props.join(' ')}
      >{text}</button>
    </div>

  )
}
