import React, { useEffect, useRef,useState } from 'react';
import { Props } from './backtop';

export default function BackTop({ children, duration, target, visibilityHeight }: Props) {

    const [targe,setTarge]=useState(target);

    // 得到返回顶部所需的时间
    const newduration = duration ? duration / 10 : 100;
    // 到滚动距离大于该参数时才会显示按钮
    const newvisibilityHeight = visibilityHeight ? visibilityHeight : 200;

    function ScrollTo(newT :any) {
        let scrollToptimer = setInterval(function () {
            // 拿到导航条的高度
            let newtarget = target ? target.current.scrollTop : (document.body.scrollTop || document.documentElement.scrollTop);
            var speed = newtarget / newduration;
            newT.scrollTop -= speed;
            if (newtarget == 0) {
                clearInterval(scrollToptimer);
            }
        }, 5);
    }
    
    // 点击返回顶部
    var backTop: any;
    // 控制在滚动条一定高度下点击块显示，隐藏
    const backTopEl = useRef<any>()
    useEffect(() => {
        if (target) {
            // 得到导航条元素
            let newT = target ? target.current : (document.body || document.documentElement) ;
            // 给滚动条元素添加滚动监听
            newT.addEventListener('scroll', () => {
                backTop = () => {
                    ScrollTo(newT);
                }
                var scrollTop: any = newT.scrollTop;
                // 添加防抖
                var flag = true;
                if (flag) {
                    setTimeout(() => {
                        flag = false;
                    }, 600)
                    if (scrollTop > newvisibilityHeight) {
                        backTopEl.current.style.display = 'block';
                    } else {
                        backTopEl.current.style.display = 'none';
                    }
                }

            })
        }
    }, [])

    return (
        <div className='fl-back-top' ref={backTopEl} onClick={() => backTop()} style ={targe?
        {position: 'absolute',right: '50px',bottom: '50px',width: '40px',height: '40px',zIndex: 10,cursor: 'pointer',display: 'block'}
        :{position: 'fixed',right: '50px',bottom: '50px',width: '40px',height: '40px',zIndex: 10,cursor: 'pointer',display: 'block'}
        }>
            {children}
        </div>
    )
}
