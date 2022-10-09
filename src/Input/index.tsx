import React from 'react'
import { Props } from './input'
import './style.scss'

export default function InputPro({ disabled, label, option, align }: Props) {
    let x: number = 0;

    let props = [
        'fl-input',
        disabled ? 'is-disable' : '',

    ]
    // let option=['']
    console.log(option);


    let str = ''
    let chac = (el: any) => {
        // console.log(el);
        let optDivs: any = document.querySelectorAll('.fl-input--optDiv')

        str = el
        console.log(str);

        let inp: any = document.querySelectorAll('.fl-input')[x]
        // console.log(inp);
        inp.value = str
        for (let i = 0; i < optDivs.length; i++) {
            optDivs[i].style.display = 'none'


        }


    }
    let clean = () => {



        let inp: any = document.querySelectorAll('.fl-input')[x]

        // console.log(inp);
        inp.value = ''
    }

    let ffocus = () => {

        let inps: any = document.querySelectorAll('.fl-input')
        for (let i = 0; i < inps.length; i++) {
            inps[i].onfocus = function () {
                x = i
                console.log(x);
                let div: any = document.querySelectorAll('.fl-input--optDiv')[x]
                div.style.display = 'block'
                let bor: any = document.querySelectorAll('.fl-input--div')[x]
                bor.style.border = "1px solid blue"
            }
        }



    }
let blurr=()=>{
    let bor: any = document.querySelectorAll('.fl-input--div')[x]
    bor.style.border = "1px solid rgb(165, 164, 164)"
}

    // 位置预定------------

    function weizhi(align: string | undefined) {
        switch (align) {
            case 'top':
                return {
                    position: "absolute",
                    left: '85px',
                    bottom: '43px',
                };
            case 'bottom':
                return {
                    position: "absolute",
                    left: '85px',
                    top: '43px',
                };
            case 'left':
                return {
                    position: "absolute",
                    left: '-87px',
                    top: '-25px',
                };
            case 'right':
                return {
                    position: "absolute",
                    left: '270px',
                    top: '-25px',
                };
            default: {
                return {
                    position: "absolute",
                    left: '270px',
                    top: '-25px',
                };
            }
        }
    };
    // ---------

    let wz = weizhi(align)
    console.log(wz);


    return (

        <div className='fl-input--div' style={{ position: "relative" }}>
            <input className={props.join(' ')} onFocus={ffocus} onBlur={blurr}
                placeholder="请输入"
            /><span onClick={clean}>x</span>

            <div className='fl-input--optDiv' style={wz}>
                {/* <option value="" >{label}</option> */}
                {
                    option.map((item, index) => {
                        return (<option className={item.disabled?"":"fl-input--option"} onClick={() => chac(item.label)} key={index} disabled={item.disabled}
                        >{item.label} </option>)
                    })
                }
            </div>

        </div >
    )
}



