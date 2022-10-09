import React from 'react'
import Star from '..'

export default function App() {
    let data = {
        num: 10, // 星星数量
        color: "#f6dd06", // 星星颜色
        defaultShow: 7, // 默认选中个数
        readonly: false, // 是否只读
        CallbackFunction:()=>{
            console.log(1111);
        } // 鼠标点击的回调函数
      };
  return (
    <div>
      <Star data={data}  />
    </div>
  );
}


