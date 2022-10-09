import React,{useState,useEffect} from 'react'
import { Props } from './Skeleton'
import { nanoid } from 'nanoid';
import './Skeleton.scss'




export default function Button({loading,avatar,isChange,title,row,width,data}:Props) {
  
  let dataSource = data?data:[
    {
      id:nanoid(),
      title: 'Beijing Bytedance Technology Co., Ltd.',
      content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
    }];


  // width?width:["100%", "100%", "100%"],
   
    let [Loading, setLoading] = useState({
        
        loading: loading?true:false, //当前是否处于加载状态
        avatar: avatar?true:false, //是否要显示头像
        isChange: isChange?true:false,
        title:title?true:false, // 是否存在标题
        row: row?row:2, //自定义加载时的行数
        width:width?width:['60%','70%'] //自定义加载时每行的长度

    });

    //   开关切换 类名变化
    
      function changeSwitch(){
        
        // 当前是否处于加载状态取反
        Loading.loading = Loading.loading?false:true;
    
        // Loading.width = Loading.loading?[]:Loading.width2;
        
        // 重新渲染
        setLoading({...Loading})
        
      }
    
      // 是否要显示头像
      let avatarIsShow = Loading.avatar?'block':'none';
      // 是否显示标题
      let titleIsShow = Loading.title?'block':'none';
      // 类名切换 点击按钮切换
      let divClass = ['fl-concis-switch',Loading.loading?'fl-switch-true':'fl-switch-false']
      return (
        
        <div>
            <div className={divClass.join(' ')} onClick={changeSwitch} style={{display:Loading.isChange?'inline-block':'none'}}>
                <div className='fl-concis-switch-dot'></div>
            </div>

          <div style={{width:'800px'}}>
            <div className={Loading.loading?'fl-concis-list-item':'fl-concis-list'}  style={{width:'600px',fontSize:'16px'}}>
                {
                    dataSource.map((item:any)=>{
                       return(
                        <div className="fl-concis-skeleton" key={item.id}>
                            {/* 头像框 */}
                            <div className={Loading.loading?'fl-concis-avatar':'fl-concis-skeleton-avatar'} style={{display:avatarIsShow}}>
                              {Loading.loading?'A':''}
                            </div>
                            {/* 数据框 */}
                            <div className={Loading.loading?'fl-concis-text':'fl-concis-skeleton-container'} >
                              <div className={Loading.loading?'fl-concis-text-title':'fl-concis-skeleton-container-title'} style={{display:titleIsShow}}>
                                {Loading.loading?item.title:''}
                              </div>
                                  {
                                    Loading.width.map(item=>{
                                      return(
                                        <div className="fl-concis-skeleton-container-line" style={{width:item}} key={nanoid()}>
    
                                        </div>
                                      )
                                    })
                                  }
                                  <div className={Loading.loading?'fl-concis-text-cont':'fl-concis-skeleton-container-cont'}>
                                    {Loading.loading?item.content:''}
                                  </div>
                              </div>
                        </div>
                       )
                    })
                }
            </div>
          </div>
        </div>
      );
}
