import React from 'react'
import './Swiper.scss'
import { Swiper } from './Swiper'

export default function Demo(props: any): Swiper {
    let { imgList, height, width, deply } = props;
    // 定义ul的位置状态
    const [tranUl, setTranUl] = React.useState(-width);

    // 控制ul的动画属性
    const [tranBox, setreanBox] = React.useState("all 0.4s ease");

    // 节流阀
    const [throttle, setthrottle] = React.useState(true);

    // 控制自动轮播
    const [tree, settree] = React.useState(true);


    // 点击右边
    function rightTo() {
        console.log(throttle);
        if (throttle) {
            // console.log("关闭阀门");
            setthrottle(false)
            setTranUl((tran) => {
                return tran + (-width)
            })
            setTimeout(() => {
                // console.log("开启阀门");
                setthrottle(true)
            }, 650)
        }
    }

    // 生命周期监测是否走到最后一张或第一张
    React.useEffect(() => {
        if (tranUl == -width || tranUl == -width * imgList.length) {
            setreanBox("all 0.4s ease")
        }
        if (tranUl <= -width * (imgList.length + 1)) {
            // setreanBox("none")

            setreanBox("none")
            setTranUl(-width)


        } else if (tranUl == 0) {

            setreanBox("none")
            setTranUl(-width * imgList.length)


        }
    }, [tranUl])

    // 点击左边
    function leftTo() {
        if (throttle) {
            setthrottle(false)
            setTranUl((tran) => {
                return tran - (-width)
            })
            setTimeout(() => {
                setthrottle(true)
            }, 650)
        }
    }

    // 自动轮播
    React.useEffect(() => {
        if (deply) {
            let timer = setInterval(() => {
                console.log(tree);
                if (tree) {
                    settree(false)
                    setTranUl((tran) => {
                        return tran + (-width)
                    })
                    setTimeout(() => {
                        settree(true)
                    }, deply);
                }
            }, deply);
            return () => {
                clearInterval(timer)
            }
        }
    }, [])


    return (
        <div
            style={{ height: height, width: width }}
            className="rotation"

        >
            <button className="lt" onClick={leftTo}>左边</button>
            <ul
                className="rotationBox"
                style={{
                    width: width * (imgList.length + 2),
                    // transform: `translateX(${tranUl}px)`,
                    marginLeft: `${tranUl}px`,
                    transition: tranBox
                }}
            >
                <li><img src={imgList[imgList.length - 1]} alt="-1" /></li>
                {
                    imgList.map((itme: any, index: any) => {
                        return <li key={index}><img src={itme} alt={index} /></li>
                    })
                }
                <li><img src={imgList[0]} alt={imgList.length + 1} /></li>
            </ul>
            <button className="rt" onClick={rightTo}>右边</button>
        </div>
    )
}