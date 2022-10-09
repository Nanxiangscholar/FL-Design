import React,{useEffect, useRef, useState} from 'react'
import style from './index.module.scss'

function DatePicker() {
    // 获取焦点后的样式
    let [focus,setFocus] = useState(false);
    // main主体数据
    let [show,setShow] = useState(false)
    // 1. 初始日期
    // let [day,setday] = useState(new Date());
    // 2. 42格子遍历数据
    let [Arr,setArr] = useState([]);
    // 3. 年份 // 控制这俩就可以控制日历
    let [year,setyear] = useState(2022);
    // 4. 月份
    let [math,setMath] = useState(1);
    // 5. 日期
    let [datas,setDatas] = useState(0);
    // 6. 输入框
    let myRefipt = useRef();
    let mySection = useRef();
    // 7. 输入框内容
    let [iptValue,setiptValue] = useState("");

    // 获取当前月第一天
    // getDate获取日期
    // 假设我们要获取2022-07月的日期数据
    // 1. 先获取当月的1日是周几---date.getDay()得到周5
    //  - 所以开始遍历的起始为第5个，依次往后遍历累加直到当月最后一天
    // 2. 填充42个格子
    //  - 长度为42的数组,如果当月1日不为周一则前半部分为当月总日从后往前依次递减排列
    useEffect(()=>{
        // 监测月份和日期的变化
        // 1.前本部分为上月最后几天
        let frontArr = [];
        // 2.中间为当月日期
        let centerArr = [];
        // 3.若长度不大于42，后半部分1-开始累加
        let afterArr = [];
        let day = new Date(`${year}-${math}`);
        // console.log(day);
        // console.log('当月第一天为周',day.getDay());//获取当月第一天周几
        // console.log(day.getMonth());//获取上个月的月份(不需要加一)
        // 上个月有dayMath[day.getMonth()-1]
        let dayMath = [31,28,31,30,31,30,31,31,30,31,30,31];//一年每月的天数
        // console.log(day.getFullYear());//年份 
        if (day.getFullYear()%4 === 0 && day.getFullYear()%100 !== 0) {
            dayMath[1] = 29
        }
        // console.log('上个月有',dayMath[day.getMonth()-1]);
        let forOne = dayMath[day.getMonth()-1]
        if (day.getMonth()+1===1) {
            forOne = 31
        }
        // console.log(forOne);//上月的天数
        let shangMatch = day.getDay() - 1
        if (day.getDay()===0) {
            shangMatch = 6
        }

        // 如果这个月为1月,则上个月按照12月的31计算
        while (frontArr.length < shangMatch) {
            frontArr.unshift(forOne--)
        }
        // console.log('上个月的数组',frontArr);//上月的数组
        // console.log('这个月',day.getMonth()+1);
        let index = 1;
        // while(centerArr.length < dayMath[day.getMonth()-1]){
        //     centerArr.push(index++)
        // }
        // console.log(dayMath[day.getMonth()]);
        for (let i = 0; i < dayMath[day.getMonth()]; i++) {
            // console.log(28);
            if (index>31) {
                break
            }
            centerArr.push(index++)
        }
        // console.log('这个月的数组',centerArr);//这个月的数组

        let endFor = 42 - frontArr.length - centerArr.length;
        // console.log(endFor);
        for (let i = 1; i < endFor+1; i++) {
            afterArr.push(i)
        }
        // console.log('最后数组',afterArr);

        // 汇总数组
        let countArr = [...frontArr,...centerArr,...afterArr];
        // console.log('数组汇总',countArr);
        let newArr = [];
        newArr.push(countArr.slice(0,7))
        newArr.push(countArr.slice(7,14))
        newArr.push(countArr.slice(14,21))
        newArr.push(countArr.slice(21,28))
        newArr.push(countArr.slice(28,35))
        newArr.push(countArr.slice(35,42))
        // console.log(newArr);
        setArr(newArr)


    },[year,math])

    // 第一次进入页面当前日期
    useEffect(()=>{
        let data = new Date();
        // console.log(data.getFullYear());
        // console.log(data.getMonth());
        setyear(data.getFullYear());
        setMath(data.getMonth()+1)
        // console.log(data.getDate());
        setDatas(data.getDate())
    },[])

    useEffect(()=>{
        // 点击除去日历以外的部分隐藏日历
        document.onclick = ()=>{
            setShow(false)
            setFocus(false)
        }
    },[])

    // div获取焦点
    function divFocus(e) {
        e.nativeEvent.stopImmediatePropagation();
        // console.log('div获取了焦点');
        setFocus(true)
        setShow(true)
    }

    // 事件
    function nextMath() {
        // 点击下一月份
        setMath(title=>{
            return title+1
        })
        if (math >= 12) {
            setyear(title=>{
                return title+1
            })
            setMath(title=>{
                return 1
            })
        }
        // console.log(myRefipt);
        // myRefipt.current.focus();
    }
    function upMath() {
        // 点击上一月份
        setMath(title=>{
            return title-1
        })
        if (math <= 1) {
            setyear(title=>{
                return title-1
            })
            setMath(title=>{
                return 12
            })
        }
    }

    // 点击下一年
    function nextYear() {
        setyear(title=>{
            return title+1
        })
    }
    // 点击上一年
    function upYear() {
        setyear(title=>{
            return title - 1
        })
    }
    // 点击今天跳转
    function teday(){
        let data = new Date();
        setyear(data.getFullYear());
        setMath(data.getMonth()+1)
        setDatas(data.getDate())
    }

    // 鼠标移入改变输入框内容
    function mouseOver(tit,index) {
        // 获取到内容
        myRefipt.current.value = year+'-'+math+'-'+tit;
        if (index === 0) {
            if (tit > 7) {
                if (math > 1) {
                    myRefipt.current.value = year+'-'+(math-1)+'-'+tit;
                }else{
                    myRefipt.current.value = (year-1)+'-'+ 12 +'-'+tit;
                }
            }
        }else if(index === 4){
            if (tit < 7) {
               if (math < 12) {
                    myRefipt.current.value = year+'-'+(math+1)+'-'+tit;
               }else{
                    myRefipt.current.value = (year+1)+'-'+1+'-'+tit;
               }
            }
        }else if(index === 5){
            if (tit <= 14) {
                if (math < 12) {
                    myRefipt.current.value = year+'-'+(math+1)+'-'+tit;
                }else{
                    myRefipt.current.value = (year+1)+'-'+1+'-'+tit;
                }
            }
        }

    }

    // 鼠标点击改变ipt值，并且隐藏日历
    function clickIpt(tit,index) {
        if (index === 0) {
            if (tit > 7) {
                if (math > 1) {
                    iptValue = year+'-'+(math-1)+'-'+tit;
                    setiptValue(year+'-'+(math-1)+'-'+tit)
                }else{
                    iptValue = (year-1)+'-'+12+'-'+tit;
                    setiptValue((year-1)+'-'+12+'-'+tit)
                }
            }else{
                iptValue = year+'-'+math+'-'+tit;
                setiptValue(year+'-'+math+'-'+tit)
            }
        }else if(index === 4){
            if (tit < 7) {
                if (math<12) {
                    iptValue = year+'-'+(math+1)+'-'+tit;
                    setiptValue(year+'-'+(math+1)+'-'+tit)
                }else{
                    iptValue = (year+1)+'-'+1+'-'+tit;
                    setiptValue((year+1)+'-'+1+'-'+tit)
                }
            }else{
                iptValue = year+'-'+math+'-'+tit;
                setiptValue(year+'-'+math+'-'+tit)
            }
        }else if(index === 5){
            if (tit <= 14) {
                if (math<12) {
                    iptValue = year+'-'+(math+1)+'-'+tit;
                    setiptValue(year+'-'+(math+1)+'-'+tit)
                }else{
                    iptValue = (year+1)+'-'+1+'-'+tit;
                    setiptValue((year+1)+'-'+1+'-'+tit)
                }
            }else{
                iptValue = year+'-'+math+'-'+tit;
                setiptValue(year+'-'+math+'-'+tit)
            }
        }else{
            iptValue = year+'-'+math+'-'+tit;
            setiptValue(year+'-'+math+'-'+tit)
        }
        // console.log(iptValue);
        // console.log(iptValue);
        myRefipt.current.value = iptValue
        // console.log(myRefipt.current.value);
        setTimeout(() => {
            setShow(false)
        }, 0);
    }

    // 没有点击鼠标移出清除input
    function mouseOut() {  
        myRefipt.current.value = iptValue;
    }


  return (
    <div className={style.Box}
    onClick={(ev)=>divFocus(ev)}
    // onBlur={divBlur}
    
    >
        <div 
        className={focus?[style.iptBox,style.iptBoxFocu].join(' '):style.iptBox}>
            <input type="text"
                placeholder="请选择日期"
                ref={myRefipt}
            />
            <span>icon</span>
        </div>

        <section
        ref={mySection}
        tabIndex="-1"
        className={show?`${style.dropChangeUp}`:`${style.dropChangeDown}`}
        >
            <div className={style.sectionTop}>
                <header>
                    <button 
                    className={style.leftBtnOne}
                    onClick={upYear}
                    >
                        <span></span>
                    </button>
                    <button 
                    className={style.leftBtnTwo}
                    onClick={upMath}
                    >
                        <span></span>
                    </button>
                    <div>
                        <button 
                        className={style.yearBtn}
                        style={{marginRight:5}}
                        >
                            {year}年
                        </button>
                        <button className={style.monthBth}>
                            {math}月
                        </button>
                    </div>
                    <button 
                    className={style.rightBtnTwo}
                    onClick={nextMath}
                    >
                        <span></span>
                    </button>
                    <button 
                    className={style.rightBtnOne}
                    onClick={nextYear}
                    >
                        <span></span>
                    </button>
                </header>
                <main>
                    <table>
                        <thead>
                            <tr className={style.tr}>
                                <th>一</th>
                                <th>二</th>
                                <th>三</th>
                                <th>四</th>
                                <th>五</th>
                                <th>六</th>
                                <th>七</th>
                            </tr>
                        </thead>
                        <tbody
                        onMouseOut={mouseOut}
                        >
                            {
                                Arr.map((title,index)=>{
                                    return (
                                        <tr key={index}>
                                           {
                                               title.map((tit,ind)=>{
                                                return (
                                                    <td 
                                                    key={ind}
                                                    className={
                                                        [index === 0 ? (tit > 7 ? `${style.lightColour}` : ""):
                                                        index === 5 ? (tit<=20 ? `${style.lightColour}` : ""):
                                                        index === 4 ? (tit<=7 ? `${style.lightColour}` : ""):
                                                        "",
                                                        tit === datas&&year===new Date().getFullYear()&&math===new Date().getMonth()+1 ? `${style.choice}`:""
                                                    ].join('')
                                                    }
                                                    onMouseOver={()=>mouseOver(tit,index)}
                                                    
                                                    onClick={()=>clickIpt(tit,index)}
                                                    >{tit}</td>
                                                )
                                            })
                                           }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </main>
            </div>
            <footer className={style.footer}>
                <a href="javascript:void(0)" onClick={teday}>今天</a>
            </footer>
        </section>
    </div>
  )
}

export default DatePicker
