import React,{useState} from 'react'
import Header from '../index.tsx';
import List from '../indexList.tsx';
import './index.scss';

export default function App() {
    let header = 'List title'
    let [listSize,setListSize] = useState('default');
    function size(a) {
    setListSize(a.textContent); 
  }
    const dataSource = [
        'Beijing Bytedance Technology Co., Ltd.',
        'Bytedance Technology Co., Ltd.',
        'Beijing Toutiao Technology Co., Ltd.',
        'Beijing Volcengine Technology Co., Ltd.',
        'China Beijing Bytedance Technology Co., Ltd.',
      ];
  return (
    <div>
        <div className="fl-app-size">
          <span className={listSize === 'default' ? 'active-size-bar' :''} onClick={(e) =>{size(e.target)}}>default</span>
          <span className={listSize === 'big' ? 'active-size-bar' :''} onClick={(e) =>{size(e.target)}}>big</span>
          <span className={listSize === 'small' ? 'active-size-bar' :''} onClick={(e) =>{size(e.target)}}>small</span>
        </div>
        <ul className='fl-list'>
            <Header header={header}/>
            <List dataSource={dataSource} size={listSize}/>
        </ul>
      
       
    </div>
  )
}