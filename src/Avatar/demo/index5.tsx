import React from 'react'
import Avatar from '..'

export default  ()=> {
  return (
    <div style={{display:'flex'}}>
        <Avatar size={50} groupStyle={{ margin: '0 10px' }} style={{ background: '#3370ff' }}>React</Avatar>
        <Avatar size={50} groupStyle={{ margin: '0 10px' }} style={{ background: '#14a9f8' }}>ReactUI</Avatar>
        <Avatar size={50} groupStyle={{ margin: '0 10px' }} style={{ background: '#00d0b8' }}>ReactViewUI</Avatar>
        
    </div>
  )
}
