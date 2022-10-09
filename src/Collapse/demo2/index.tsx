import React, { useState } from "react";
import './demo2.scss'


export default function Collapse() {

    let [list, setList] = useState([{
        text1: '一致性 Consistency',
        type: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念',
        text: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
        btn: true
    }, {
        text1: '反馈 Feedback',
        type: '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作',
        text: '页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。',
        btn: true
    }, {
        text1: '效率 Efficiency',
        type: '简化流程：设计简洁直观的操作流程',
        text: '清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策。',
        btn: true
    }, {
        text1: '可控 Controllability',
        type: '用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策',
        text: '结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。',
        btn: true
    }]);

    const ChangeHeight = (index:any, btn:any) => {
    
        let res = !btn

        for (let i = 0; i < list.length; i++) {
            if (i === index) {
                list[i].btn = res;
            }
        }

        setList([...list])

    }

    return (

        <ul className="lists">
            {
                list.map((item, index) => {
                    return (
                        <div  key={item.text1 + index} className="li-father" onClick={() => { ChangeHeight(index, item.btn) }} style={item.btn ? { height: '48px' } : { height: '96px' }}>
                            <li >
                                {item.text1}
                                <span style={item.btn?{transform: 'rotate(0deg)'}:{transform: 'rotate(90deg)'}}>&gt;</span>
                            </li>
                            <div>{item.type}</div>
                            <div>{item.text}</div>
                        </div>
                    )
                })
            }
        </ul>

    )
}