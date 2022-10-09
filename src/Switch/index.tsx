import React,{useState,useEffect} from 'react'
import { Props } from './Switch';
import { nanoid } from 'nanoid';
import './Switch.scss'




export default function Switch({disabled,small,defaultChecked,loading,CallbackFunction}:Props) {
    // 对回调函数进行初始化定义
    let Callback:Function = CallbackFunction?CallbackFunction:()=>{};
    
  let [Switch,setSwitch] = useState({
    disabled:disabled?true:false, // 是否禁用按钮
    small:small?true:false, // 是否为小型按钮
    defaultChecked:defaultChecked?true:false, // 是否默认选中
    loading:loading?true:false, // 加载状态
  });


  // 定义按钮类名 1-默认样式 2-是否选中 3-是否为小按钮
  let switchClass = ['fl-switch',Switch.defaultChecked?'fl-switch-true':'fl-switch-false',Switch.small?'fl-switch-small':''];
  // 定义按钮状态切换按钮
  function changeChecked(){
    // 默认选中状态取反
    Switch.defaultChecked = Switch.defaultChecked?false:true;
    // 重新渲染数据
    setSwitch({...Switch});
    // 执行回调函数
    Callback()
  }

  // 定义禁止选中状态
  let disabledStyle = 'disabled:not-allowed,opacity: 0.6'
  return(
    <div className={switchClass.join(' ')} onClick={Switch.disabled?()=>{}:changeChecked} style={{opacity:Switch.disabled?'0.6':'1',cursor:Switch.disabled?'not-allowed':'pointer'}}>
        <div className='fl-switch-dot'>
            {
                Switch.loading?<div className='fl-loading'>
                    <svg fill='none' stroke='currentColor' width='1em' height='1em' srtoke-width='1em' viewBox='0 0 48 48' aria-hidden='true' focusable='false'>
                        <path d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"></path>
                    </svg>
                </div>:''
            }
        </div>
    </div>
  )
}
