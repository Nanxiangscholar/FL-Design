import React from 'react'
import Button from '..';

export default ()=>{
    return(
        <div>
            <Button disable type='general' text='默认按钮'></Button>
            <Button disable type='main' text='主要按钮'></Button>
            <Button disable type='success' text='成功按钮'></Button>
            <Button disable type='error' text='危险按钮'></Button>
            <Button disable type='info' text='信息按钮'></Button>
            <Button disable type='danger' text='警告按钮'></Button>
        </div>
    )
}
