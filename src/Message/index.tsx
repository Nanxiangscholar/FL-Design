// index.tsx
import React from 'react';
import { useState,useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import Msg from './Msg';
import { MessageApi,List } from './config';
import './index.scss';

let add: (L: List) => void;
export const MessageContainer = () => {
  const [lists ,setList] = useState<List[]>([]);

  // 用于删除显示的提示框
  const remove = (L:List) => {
    const { key } = L;
    setList((pre:List[]) => ( 
      pre.filter((each:List) => key !== each.key) ))
  }

  // 添加提示框在页面
  add = (option:List) => {   
    setList((pre:List[])=>{
      const obj = [...pre,option ];
      setTimeout(() => {
          remove(option)
        }, 5000)
        return obj
    })
  }

  useEffect(() => {
    if (lists.length > 10) {
      lists.shift();
    }
  }, [lists])

  return (
    <>
      {
        lists.map(({ text, key, type  }) => (
            <Msg key={key} type={type} text={text}/>
        ))
      }
    </>
  )
} 

// 获取唯一id
const getId = () => {
  return (Math.random() * 1000).toFixed()
}

// 暴露的message-API
const $message: MessageApi = {
  info: (text) => {
    add({
      text,
      key: getId(),
      type: 'info',

    })
  },
  success: (text) => {
    add({
      text,
      key: getId(),
      type: 'success',

    })
  },
  warning: (text) => {
    add({
      text,
      key: getId(),
      type: 'warning',

    })
  },
  error: (text) => {
    add({
      text,
      key: getId(),
      type: 'error',

    })
  }
}
export default $message;

// 挂载容器到页面
const createMessage = () => {
  let el = document.getElementById('#message-wrap');
  // 这一步是必要的的，因为在执行到这里的时候，页面还没有挂载，所以获取不到el节点
  if (!el) {
      el = document.createElement('div')
      el.className = 'message-wrap'
      el.id = 'message-wrap'
      document.body.append(el)
  }
  ReactDOM.render( <MessageContainer />, el);
}
createMessage();

