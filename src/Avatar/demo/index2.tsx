import React from 'react'
import Avatar from '..'

export default  ()=> {
  return (
    <div style={{display:'flex'}}>
        <Avatar size={64}>A</Avatar>
        <Avatar size={64}>icon</Avatar>
        <Avatar size={64} shape='square'>View</Avatar>
        <Avatar size={40} shape='square'>React</Avatar>
        <Avatar>
          <img src="https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png" />
          </Avatar>
    </div>
  )
}
