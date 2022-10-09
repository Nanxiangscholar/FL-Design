import React, { useRef, useState } from 'react'

export default function index1() {
    let [data, setData] = useState(false)
    let ipt = useRef(null);

    //搜索框
    let change = () => {
        if (ipt.current) {
            data = !data;
            setData(data)
            let dom: any = ipt.current
            if (data) {

                dom.style.opacity = '1'
            } else {

                dom.style.opacity = '0'
            }
        }
    }
    //搜索还没写？？？？？？
    let search = () => {
        if (ipt.current) {
            let dom: any = ipt.current
            dom = dom.querySelector('.input')
            console.log(dom.value);
        }
    }
    return (
        <div>
            <span role="img" aria-label="search" className="anticon anticon-search">
                <svg onClick={() => change()}
                    viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"

                    >
                    </path></svg></span>

            <div className="pop-dialog" ref={ipt} style={{ opacity: 0, width: '130px', display: 'flex', position: 'absolute' }}>

                <div className="concis-input" style={{ width: '70px' }}>
                    <input className="input" type="text" placeholder="请输入"
                        defaultValue="" style={{ width: '70px', color: '#325dff' }} />
                </div>
                <div className="search-btn1" onClick={() => { search() }}>
                    <span role="img" aria-label="search"
                        className="anticon anticon-search1">
                        <svg viewBox="64 64 896 896" focusable="false"
                            data-icon="search" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true">
                            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                            </path></svg></span></div></div>

        </div >
    )
}
