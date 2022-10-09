import React,{useState,useEffect} from 'react'
import './demo1.css'
import './demo2.tsx'
import ReactDOM from 'react-dom';
import Content from './demo2';
export default function mySelf() {
  let [show,setShow] = useState(true);
   function m(){
    let content = document.getElementsByClassName('content')[0];
     let box = document.createElement('div')
     box.className = 'box1'
       ReactDOM.render(<Content />,box);
       content.appendChild(box)
   }
    function click(inddd){
      let content = document.getElementsByClassName('content')[0];
      
      if(inddd){ 
        m();
       }else{
        let box1 =document.querySelector('.content div')
       content.removeChild(box1);
       }
      show?setShow(false):setShow(true)
    }
  return (
    <div className='content'>
    <button className='btn1' onClick={()=>click(show)}>点击</button>
    </div> 
  )
}
// ()=>isShow()