import React from 'react';
import Button from '../../Button/index'
import $message from '../index.tsx';


export default ()=> {
  return (
    <div style={{display:'flex',gap:'10px 10px',flexWrap:'wrap'}}>
      <Button 
       type='main' 
       text='自定义'
       onClick={()=>$message.success('自定义消息')} >
       </Button>

      <Button 
       type='success' 
       text='info'
       onClick={()=>$message.info('自定义消息')} >
       </Button>

      <Button 
       type='error' 
       text='warning'
       onClick={()=>$message.warning('自定义消息')} >
       </Button>
      
    </div>
  )
}
