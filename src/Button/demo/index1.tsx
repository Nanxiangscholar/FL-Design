import React from 'react'
import Button from '..';

export default ()=>{
    return(
        <div>
            <Button type='general' text='默认按钮'></Button>
            <Button type='main' text='主要按钮'></Button>
            <Button type='success' text='成功按钮'></Button>
            <Button type='error' text='危险按钮'></Button>
            <Button type='info' text='信息按钮'></Button>
            <Button type='danger' text='警告按钮'></Button>
            <br />
            <Button type='general-two' text='默认按钮'></Button>
            <Button type='main-two' text='主要按钮'></Button>
            <Button type='success-two' text='成功按钮'></Button>
            <Button type='error-two' text='危险按钮'></Button>
            <Button type='info-two' text='信息按钮'></Button>
            <Button type='danger-two' text='警告按钮'></Button>
        </div>
    )
}
