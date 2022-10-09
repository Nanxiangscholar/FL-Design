import React, { useState } from 'react'
import '../themes/Select.scss'
import { Props } from './select'
import imga from './img/down.svg'
import imgb from './img/up.svg'
export default function Select({ className, option, disable, placeholder, readOnly, loading, showSearch }: Props) {
  let props = [
    'fl-select-img',
    loading? 'is-loading':'',
    disable? 'is-disable':''
  ]
  let [display, setDisplay] = useState('none')
  let [imgs, setImgs] = useState(imga)
  let [value,setValue] = useState('')
  let onclick = (item?: any)=>{
    setValue(item)
    setDisplay('none')
    setImgs(imga)
  }
  function onclickInput(value?:any) {
    setDisplay('block')
    setImgs(imgb)
    setValue(value)
    
  }
  function onblurInput() {
    setDisplay('none')
    setImgs(imga)
  }
  return (
    <div className='fl-select'>
      <div className='fl-select-ipt'>
        <input type="text" name='' id=""
          className={disable?'fl-select-input fl-select-input-show':'fl-select-input'}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disable}
          value = {value}
          onClick={() => onclickInput()}
        /> 
        <img src={loading? '': imgs}  alt="" className={props.join(' ')} />
      </div>

      <div className='fl-select-opt' style={{ display: display }}>
        <div className='neimu' onClick={() => onblurInput()}></div>
        {
          option.map((item, index: number) => {
            return <option
              className={item.disable?'fl-select-option is-disable':'fl-select-option'}
              key={index}
              disabled={item.disable}
              onClick={() => onclick(item.label)}
            >{item.label}</option>
          })
        }
      </div>
    </div>

  )
}
