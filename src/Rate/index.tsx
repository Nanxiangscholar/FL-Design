import React,{useState,useEffect} from 'react'
import { Props } from './Rate';
import './Rate.scss'


export default function Star({data}:Props) {
  
  let [star, SetStar]:any = useState([]);

  if (star.length === 0) {
    for (let i = 0; i < data.num; i++) {
      var isShow:any = false;
      if (i < data.defaultShow) {
        var isShow:any = true;
      }
      let obj:object = {
        id:i, //唯一索引id
        isShow, // 当前是否选中
        color:isShow?data.color:'', // 当前的颜色

        readonly:data.readonly, // 是否只读
        chooseNum:data.defaultShow, // 当前选中的有几颗星星

      }
      star.push(obj);
    }

  }


  
  // 鼠标移入星星事件
  function MouseEnter(index:any){
      // 拿到index的值，更改此index之前的所有对象的选中isShow
    let newStar = [];

    for (let i = 0; i < data.num; i++) {
      var isShow = false;
      if (i <= index) {
        var isShow = true;
      }
      let obj = {
        id:i, //唯一索引id
        isShow, // 当前是否选中
        color:isShow?data.color:'', // 当前的颜色

        readonly:data.readonly, // 是否只读
        chooseNum:data.defaultShow, // 当前选中的有几颗星星
      }
      newStar.push(obj);
      SetStar([...newStar])
    }
    
  }

 
return (
  <div>
      {
          star.map((item:any,index:any)=>{
              return (
                  <div className='rate-box' key={item.id} onMouseEnter={()=>data.readonly?'':MouseEnter(index)} onMouseDown={()=>{data.CallbackFunction?data.CallbackFunction():''}}>
                      <svg  viewBox='80 80 896 896' focusable='false' width='30px' height='30px' fill='currentColor' aria-hidden='true' style={{color:item.isShow?item.color:'rgb(204, 204, 204)'}}>
                         <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                      </svg>
                      
                  </div>
              )
          })
         
      }
  </div>
  
)
}