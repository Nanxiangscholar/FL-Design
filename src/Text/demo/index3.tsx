import React, { useState } from 'react'
import Div from '../index'

export default function First() {
    let noBorder =false;
  let [state, setState] = useState(
    [
      {
        listKey: 1,
        list: false,
        header: 'Beijing Toutiao Technology Co., Ltd.',
        text: 'Beijing Toutiao Technology Co., Ltd.',
        disabled: false,
      },
      {
        listKey: 2,
        list: false,
        header: 'introduce',
        text: 'ByteDances core product, Toutiao ("Headlines"), is a content platform in China and around the world. Toutiao started out as a news recommendation engine and gradually evolved into a platform delivering content in various formats, such as texts, images, question-and-answer posts, microblogs, and videos.',
        disabled: false,
      },
      {
        listKey: 3,
        list: false,
        header: 'The Underlying AI Technology',
        text: 'In 2016, ByteDances AI Lab and Peking University co-developed Xiaomingbot (张小明), an artificial intelligence bot that writes news articles. The bot published 450 articles during the 15-day 2016 Summer Olympics in Rio de Janeiro. In general, Xiaomingbot published stories approximately two seconds after the event ended.',
        disabled: false,
      },
    ]
  )
  let show: any = (index: any) => {
    if (state[index-1].disabled == false) {
      state[index - 1].list = !state[index - 1].list;
      setState([...state]);
    }
  }
  return (
    <div>
      {
        state.map((item,index)=>{
          return(
            <Div header={item.header} text={item.text} arr={[1,2,3]} show={show} listKey={item.listKey} disabled={item.disabled} list={state[index].list} key={index}/>
          )
        })
      }
    </div>
  )
}
