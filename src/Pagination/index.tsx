import React, { useState, useEffect, useRef } from 'react'
import './pagin'
import './index.scss'
//总变化值
var targetdom = 0;
//渲染数值的 中间操作值
var count = 5;
export default function Pagination(props: Props) {
    let {
        totals,
        showSizeChanger,
        showJumpInput,
        pageSizeOptions,
        classNames
    } = props
    //总条数
    const [total, setTotal] = useState(totals || 500)
    //每页条数
    const [strip, setStrip] = useState(pageSizeOptions || 10)
    //page数量
    const [pagetotal, setPagetotal] = useState(total / strip)
    //页数
    const [page, setPage] = useState([])

    //左右节点 及变化
    const leftbox = useRef(null)
    const rightbox = useRef(null)
    function disabled(nmus: Number) {
        if (targetdom === 0) {
            rightbox.current.classList.remove('concis-pagination-disabled')
            leftbox.current.classList.add('concis-pagination-disabled')
        } else if (targetdom === (nmus)) {
            leftbox.current.classList.remove('concis-pagination-disabled')
            rightbox.current.classList.add('concis-pagination-disabled')
        } else {
            rightbox.current.classList.remove('concis-pagination-disabled')
            leftbox.current.classList.remove('concis-pagination-disabled')
        }
    }
    //向左 
    function prev() {
        let number = pagetotal;
        let arrtorge = document.querySelectorAll(classNames + ' .concis-pagination-numberBox')

        // let arrtorgess = document.querySelectorAll(classNames +' .concis-pagination-numberBox')
        // console.log(arrtorgess);
        arrtorge[targetdom].classList.remove("pagination-show")
        if (targetdom === 0) {
            arrtorge[0].classList.add("pagination-show")
        } else {
            if (count <= number - 6 && count > 5) {
                targetdom = 3
            } else {
                targetdom--
            }
            // console.log("pagination-show");
            arrtorge[targetdom].classList.add("pagination-show")
        }
        pages()
        disabled(arrtorge.length - 1)
    }
    
    //向右
    function next() {
        let number = pagetotal;
        let arrtorge = document.querySelectorAll(classNames + ' .concis-pagination-numberBox')
        arrtorge[targetdom].classList.remove("pagination-show")
        // console.log(targetdom);

        if (targetdom === arrtorge.length - 1) {
            arrtorge[arrtorge.length - 1].classList.add("pagination-show")
        } else {
            if (count <= number - 6 && count > 5) {
                targetdom = 5
            } else {
                targetdom++
            }
            arrtorge[targetdom].classList.add("pagination-show")
        }
        pages()
        disabled(arrtorge.length - 1)
    }

    //页码的点击效果
    function selfChange(m: number) {
        let arrtorge = document.querySelectorAll(classNames + ' .concis-pagination-numberBox')
        for (let i = 0; i < arrtorge.length; i++) {
            arrtorge[i].classList.remove("pagination-show")
        }
        targetdom = m;
        arrtorge[targetdom].classList.add("pagination-show")
        disabled(arrtorge.length - 1)
        pages()
    }

    //动态页码的生成
    function pages() {
        //页数
        let number = pagetotal;
        let pagesArr = []
        //少于等于9个就全部显示
        if (number <= 8) {
            for (let i = 0; i < number; i++) {
                if (i === 0) {
                    pagesArr.push(<div className='concis-pagination-numberBox pagination-show' key={i} onClick={() => selfChange(i)}>{i + 1}</div>)
                } else {
                    pagesArr.push(<div className='concis-pagination-numberBox ' key={i} onClick={() => selfChange(i)}>{i + 1}</div>)
                }
            }
        }
        //大于9个
        if (number > 8) {
            //原理是只有9位 而两端不变 中间5位随着 targetdom（下标）的变化而更新  即每一位定义一个动态变化
            //第一个框
            pagesArr.push(<div className='concis-pagination-numberBox pagination-show' key={0} onClick={() => selfChange(0)}>{1}</div>)

            //targetdom在5位之内时
            if (targetdom < 4 && targetdom !== 1) {
                if (targetdom === 0) {
                    count = 5
                    for (let i = 1; i <= 6; i++) {
                        pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{i + 1}</div>)
                    }
                } else {
                    count--
                    if (targetdom === 2 && count === 4) {
                        count = 5
                        for (let i = 1; i <= 6; i++) {
                            pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{i + 1}</div>)
                        }
                        // console.log('targetdom===2');
                    } else if (targetdom === 3 && count === 4) {
                        count = 5
                        // console.log('targetdom===3');
                        for (let i = 1; i <= 6; i++) {
                            pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{i + 1}</div>)
                        }
                    } else {
                        pagesArr.push(<div className='concis-pagination-numberBox' key={1} onClick={() => selfChange(1)}>...</div>)
                        for (let i = 2; i <= 6; i++) {
                            pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{count - 3 + i}</div>)
                        }
                    }

                    // console.log('前两位', count);
                }

                //第7位
                pagesArr.push(<div className='concis-pagination-numberBox' key={7} onClick={() => selfChange(7)}>...</div>)
            }

            //高亮第五位时  中间
            if (targetdom === 4) {
                //第二位
                // console.log('中间', count);
                pagesArr.push(<div className='concis-pagination-numberBox' key={1} onClick={() => selfChange(1)}>...</div>)
                for (let i = 2; i <= 6; i++) {
                    pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{count - 3 + i}</div>)
                }
                //第7位
                pagesArr.push(<div className='concis-pagination-numberBox' key={7} onClick={() => selfChange(7)}>...</div>)
            }


            //高亮第六位时 和第7位
            if (targetdom === 5 || targetdom === 6) {
                //第二位
                pagesArr.push(<div className='concis-pagination-numberBox' key={1} onClick={() => selfChange(1)}>...</div>)
                if (count === number - 3 - 2 && targetdom === 5) {
                    for (let i = 2; i <= 7; i++) {
                        pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{number + i - 8}</div>)
                    }
                } else if (count === number - 3 - 2 && targetdom === 6) {
                    for (let i = 2; i <= 7; i++) {
                        pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{number + i - 8}</div>)
                    }
                } else {
                    count++
                    for (let i = 2; i <= 6; i++) {
                        pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{count - 3 + i}</div>)
                    }
                    //第六位
                    pagesArr.push(<div className='concis-pagination-numberBox' key={7} onClick={() => selfChange(7)}>...</div>)
                }
                // console.log('后两位' + count);
            }


            //省略号的点击
            if (targetdom === 7) {
                pagesArr.push(<div className='concis-pagination-numberBox' key={1} onClick={() => selfChange(1)}>...</div>)
                if (count < number - 6) {
                    // if (count === 5) {
                    //     for (let i = 2; i <= 6; i++) {
                    //         pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{count - 4 + i}</div>)
                    //     }
                    //     count = 5
                    // } else {
                    count += 4;
                    for (let i = 2; i <= 6; i++) {
                        pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{count - 4 + i}</div>)
                    }
                    // }
                    pagesArr.push(<div className='concis-pagination-numberBox' key={7} onClick={() => selfChange(7)}>...</div>)
                } else {
                    count = number - 5
                    for (let i = 2; i <= 7; i++) {
                        pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{number + i - 8}</div>)
                    }
                }
                // console.log('第二个省略号', count);
            }
            if (targetdom === 1) {
                if (count > 6) {
                    count -= 4;
                    pagesArr.push(<div className='concis-pagination-numberBox' key={1} onClick={() => selfChange(1)}>...</div>)
                    for (let i = 2; i <= 6; i++) {
                        pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{count - 3 + i}</div>)
                    }
                } else {
                    count = 5
                    for (let i = 1; i <= 6; i++) {
                        pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{i + 1}</div>)
                    }
                    //第7位
                }
                pagesArr.push(<div className='concis-pagination-numberBox' key={7} onClick={() => selfChange(7)}>...</div>)
                // console.log('第一个省略号', count);
            }

            //高亮最后一个框
            if (targetdom === 8) {
                //第二位
                count = number - 5
                pagesArr.push(<div className='concis-pagination-numberBox' key={1} onClick={() => selfChange(1)}>...</div>)
                for (let i = 2; i <= 7; i++) {
                    pagesArr.push(<div className='concis-pagination-numberBox' key={i} onClick={() => selfChange(i)}>{number + i - 8}</div>)
                }
            }
            //最后一个框
            pagesArr.push(<div className='concis-pagination-numberBox' key={8} onClick={() => selfChange(8)}>{number}</div>)
        }
        setPage(pagesArr)
    }

    //改变
    function tessnmuber(sun: any) {
        let tsxt = parseInt(sun.target.value)
        // setStrip(tsxt)
        setPagetotal(total / tsxt)
        // pages()
    }
    //动态跳转
    function Jump(nowjump: any) {
        let number = pagetotal
        if (nowjump.keyCode === 13) {
            let nownum = nowjump.target.value * 1
            //大于 number-5
            if (number > 9) {
                if (nownum > number - 5) {
                    if (nownum > number) {
                        nownum = number
                    }
                    targetdom = 8
                    selfChange(targetdom)
                    targetdom = 8 - number + nownum * 1
                    selfChange(targetdom)
                }
                //小于 5 
                if (nownum < 5) {
                    targetdom = 0
                    selfChange(targetdom)
                    targetdom = nownum - 1
                    selfChange(targetdom)
                }
                //大于等于5 且 小于等于 number-5    效果  1 ... ? ? nownum ? ? ... number
                if (nownum > 4 && nownum <= number - 5) {
                    if (nownum === 5) {
                        targetdom = 0
                        selfChange(targetdom)
                        targetdom = 5
                        selfChange(targetdom)
                        targetdom = 3
                        selfChange(targetdom)
                    } else {
                        targetdom = 8
                        selfChange(targetdom)
                        //确定几次跳转
                        for (let i = 0; i <= number - 5 - nownum; i++) {
                            targetdom = 3
                            selfChange(targetdom)
                        }
                        // 固定位置
                        targetdom = 4
                        selfChange(targetdom)
                    }
                }
            }else{
                targetdom = 0
                selfChange(targetdom)
                if(nownum>number){
                    nownum = Math.ceil(number) 
                }
                targetdom = nownum - 1
                
                selfChange(targetdom)
            }

        }
    }

    //生命周期
    useEffect(() => {
        pages()
    }, [pagetotal])

    return (
        <div className='paginaction'>
            <div className='concis-pagination-prev concis-pagination-disabled' onClick={prev} ref={leftbox}>
                <span>左</span>
            </div>
            {
                page.map((pagelato) => {
                    return pagelato
                })
            }
            <div className='concis-pagination-next' onClick={next} ref={rightbox}>
                <span>右</span>
            </div>
            <select onChange={(e) => { tessnmuber(e) }} style={{ display: showSizeChanger ? 'block' : 'none' }}>
                <option value="10">10/条</option>
                <option value="20">20/条</option>
                <option value="30">30/条</option>
                <option value="40">40/条</option>
                <option value="50">50/条</option>
            </select>

            <input type="text" onKeyDown={(e) => { Jump(e) }} placeholder='回车搜索' style={{ display: showJumpInput ? 'block' : 'none' }} />
        </div>
    )
}
