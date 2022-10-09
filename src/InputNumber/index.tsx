import React, { useRef, useState } from 'react'
import './index.scss'
import { Props } from './inputnumber'

export default function InputNumber({ isabled, min, max, step, precision,numb }: Props) {
  isabled = isabled ? isabled : false
  min = min ? min : -1000;
  max = max ? max : 1000;
  step = step ? step : 1
  
  const val = useRef(null);
  const [num, setNum] = useState(numb?numb:1)
 
  
  const [ltbool, setltBool] = useState(true)
  const [rtbool, setrtBool] = useState(true)

  function Decrease() {

    let reduce =  Number((Number(val.current.value) - step).toFixed(precision));
    if (reduce >= min) {
      setNum(reduce)
    }
    if (reduce >= max) {
      setNum(max)
    }
    if (reduce <= min) {
      setNum(min)
      setltBool(false)
    }else{
      setltBool(true)
      setrtBool(true)
    }

  }
  function Increase() {
    let add = Number((Number(val.current.value) + step).toFixed(precision));

    if (add <= max) {
      setNum(add)
    }
    if(add<=min){
      setNum(min)
    }
    if(add>=max){
      setNum(max)
      setrtBool(false)
    }else{

      setltBool(true)
      setrtBool(true)
    }
   
  }
  function inputChange(tarVal: string) {
    setNum(Number(tarVal))

  }
  return (
    <div className="fl-inputNumber">
      <span className='fl-input-decrease' onClick={Decrease} style={ltbool?{cursor:'pointer'}:{cursor:'not-allowed'}}>-</span>
      <input type="text" value={num} ref={val} onChange={(event) => inputChange(event.target.value)} disabled={isabled}></input>
      <span className='fl-input-increase' onClick={Increase} style={rtbool?{cursor:'pointer'}:{cursor:'not-allowed'}}>+</span>
    </div>
  )
}
