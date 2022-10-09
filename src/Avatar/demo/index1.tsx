import React from 'react'
import Avatar from '..'

export default  ()=> {
  return (
    <div style={{display:'flex'}}>
        <Avatar  style={{ marginRight: '20px' }} >A</Avatar>
        <Avatar>icon</Avatar>
        <Avatar>View</Avatar>
        <Avatar>React</Avatar>
        <Avatar>
          <img src="https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png" />
          </Avatar>
    </div>
  )
}
