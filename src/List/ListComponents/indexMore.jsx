import React from 'react';
import Header from '../index.tsx';
import Ilist from '../indexMore.tsx'
import './index.scss';

export default function ListMore(){
    let header = 'List title'
    // 数据
    let dataSource = [
        {
          title: 'Beijing Bytedance Technology Co., Ltd.',
          content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
        },
        {
          title: 'Bytedance Technology Co., Ltd.',
          content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
        },
        {
          title: 'Beijing Toutiao Technology Co., Ltd.',
          content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
        },
        {
          title: 'Beijing Volcengine Technology Co., Ltd.',
          content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
        },
        {
          title: 'China Beijing Bytedance Technology Co., Ltd.',
          content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
        },
      ];
      return (
        <div>
            <ul className='fl-list'>
                <Header header={header}/>
                <div>
                    <Ilist text={'A'} dataSource={dataSource} size={'default'}/>
                </div>
                
            </ul>
        </div>
      );

}