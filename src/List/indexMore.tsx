import React,{ useEffect,useState} from 'react'
import { Props } from './List';


export default function Ilist({text,dataSource,style,defaultShowNum}: Props) {
    let props = [
        'fl-list',
        style?'fl-list-item-default-'+style:'',
        // text?'':'',
      ]
      let num = 0;
        function defaultShowNum1(defaultShowNum: number | undefined){
            
            let length = dataSource!.length;
            if(num>length){
            num = length;
            }
            num += defaultShowNum!
            return dataSource!.slice(0,num)
        }
    
    let data1 = defaultShowNum1(10)
    let [data,setData] = useState([...data1])
    
    function lazyScrollToBottom(){
        
        // 懒加载
        function lazyLoad(){
            // 滚动监听
            useEffect(() => {
            data = defaultShowNum1(10);
            setData([...data]);
            let list = document.getElementsByClassName('fl-list-item-default-lazyload')[0];            
            list.addEventListener("scroll", function () {
            
                let clientHeight = list.clientHeight; //可视区域高度
                let scrollTop  = list.scrollTop;  //滚动条滚动高度
                let scrollHeight = list.scrollHeight; //滚动内容高度
                if((clientHeight+scrollTop+1)>(scrollHeight)){ 
                    // state数据更新
                    let data1 = defaultShowNum1(defaultShowNum)
                    setData([...data1]);
                    // console.log(clientHeight+scrollTop, ' '+ scrollHeight);
                    dataSource!=data 
                }
            });
            },[]);
        }
        lazyLoad();
    }
    // lazyLoad 
    if(style == 'lazyload'){
        lazyScrollToBottom()
        console.log('lazyLoad');
        
    }

    if(style == 'virtualList'){
        data = dataSource!;
    }
    
    return (
    <div className={props.join(' ')}>
        {
      data.map((item:any,index) =>{
          return ( 
            <div className='fl-list-item-default-more' key={index}>
                <div className="fl-list-item-concis-avatar">
                    <div>
                        <div>{text}</div>
                    </div>
                </div>
                <div className="fl-list-item-text" key={index}>
                    <span>{item.title}</span>                      
                    <span>{item.content}</span>                       
                </div>
            </div>               
                                           
          )
      })
        }
    </div>
    );
}

