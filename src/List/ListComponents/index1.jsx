import { title } from 'process';
import React from 'react'
import Header from '../index.tsx';
import List from '../indexList.tsx';
import './index.scss';

export default function App() {
    let header = 'List title'
    const dataSource = [
        'Beijing Bytedance Technology Co., Ltd.',
        'Bytedance Technology Co., Ltd.',
        'Beijing Toutiao Technology Co., Ltd.',
        'Beijing Volcengine Technology Co., Ltd.',
        'China Beijing Bytedance Technology Co., Ltd.',
      ];
  return (
    <div>
      <ul className='fl-list'>
        <Header header={header}/>
        <List dataSource={dataSource} size={'default'}/>
        </ul>
      
       
    </div>
  )
}