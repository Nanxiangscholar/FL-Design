import React,{useState,useEffect} from 'react'
import './demo1.css'
import './demo33.jsx'
import ReactDOM from 'react-dom';
import Content from './demo33';
import publicPart from './demo333';
export default function mySelf() {
  let [show,setShow] = useState(true);
   function m(){
    let content = document.getElementsByClassName('content')[0];
     let box = document.createElement('div')
     box.className = 'box1'
       ReactDOM.render(<Content cut={cut} is={show}/>,box);
       content.appendChild(box)
   }                                                                                                                                                                                                                                                                                                
    function click1(inddd){  
     let content = document.getElementsByClassName('content')[0];
      if(inddd){ 
        m();
       }else{
        let box1 =document.querySelector('.content div') 
       content.removeChild(box1);
       }
       show ? setShow(false):setShow(true)
    }
    console.log(show);
    function cut(inddd){

        let content = document.getElementsByClassName('content')[0];
          let box1 =document.querySelector('.content div')
         content.removeChild(box1);
      
      }
      function foucess(inddd){
        let content = document.getElementsByClassName('content')[0];
          m();
        show?setShow(false):setShow(true)
      }
      function blurr(inddd){
          let content = document.getElementsByClassName('content')[0];
            let box1 =document.querySelector('.content div')
           content.removeChild(box1);
  
          show?setShow(false):setShow(true)
        }
  return (
    <div className='content'>
    <button className='btn1' onClick={()=>click1(show)} onFocus={()=>foucess(show)} onBlur={()=>blurr(show)}>点击</button>
    </div> 
  )
}
// ()=>isShow()