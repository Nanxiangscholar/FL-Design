import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../../themes/comment.scss'
import Input from '../input/input'
import FlComment from '..'
import Message from '../message/message'
export default () => {
    let date = new Date();
    let time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    let [type, setType] = useState(true)
    let [data, setData] = useState([])

    function removeComment(e) {
        let types = !type
        setType(types)
    }
    function removeComment1() {
        let ipt = document.getElementsByTagName('textarea')[0]
        if (ipt.value.length > 0) {
            let types = !type
            setType(types)
            let newdata = ipt.value;
            data.push(newdata)
            let data1 = data
            setData([...data1])
            console.log(data);
            // 创建dom 渲染 message虚拟dom
            let div = document.createElement('div');
            div.setAttribute('class', 'test');
            ReactDOM.render(<Message
                message='发布成功'
            />, div);
            let body = document.getElementsByTagName('body')[0];
            body.appendChild(div);
            setTimeout(() => {
                body.removeChild(div)
        
            }, 1000)
        }else{
            let div = document.createElement('div');
            div.setAttribute('class', 'test');
            ReactDOM.render(<Message
                message='内容不能为空'
            />, div);
            let body = document.getElementsByTagName('body')[0];
            body.appendChild(div);
            setTimeout(() => {
                body.removeChild(div)
        
            },1000)
        }
        
    }
    const actions = (
        <ul>
            <li onClick={() => textareaShow()}>
                <span>Reply</span>
            </li>
        </ul>
    );
    const commentData = {
        align: 'right',
        actions,
    }
    function textareaShow() {
        console.log(123546);
        if (type === false) {
            let newtype = !type;
            setType(newtype)
        }
    }

    return (
        <FlComment {...commentData}>
            {
                data.map((item, index) => {
                    const commentData1 = {
                        align: 'right',
                        content: item,
                        avatar: "http://concis.org.cn/images/swiper-img3.webp"
                    }
                    return (<FlComment {...commentData1} key={index} />)
                })
            }
            {
                type ? <Input removeComment={removeComment} removeComment1={removeComment1} /> : ''
            }
        </FlComment>
    )
}
