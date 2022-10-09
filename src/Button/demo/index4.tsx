import React from 'react'
import Button from '..';

export default ()=>{
    return(
        <div>
            <Button type='general' text='默认按钮' circle></Button>
            <Button type='main' text='主要按钮' circle></Button>
            <Button type='success' text='成功按钮' circle></Button>
            <Button type='error' text='危险按钮' circle></Button>
            <Button type='info' text='信息按钮' circle></Button>
            <Button type='danger' text='警告按钮' circle></Button>
        </div>
    )
}
