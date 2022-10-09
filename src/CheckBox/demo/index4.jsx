import React, { useState, useRef } from 'react'
import CheckBox from '..'

export default () => {

    function isAllChecked(ev) {
        var ipt = document.querySelector("#ipt")
        var inputs = document.querySelectorAll('.fl-checkBoxGroup-two input')
        for (var i = 0; i < inputs.length; i++) {
            if (ipt.checked == true) {
                inputs[i].checked = true
            }
            if (ipt.checked == false) {
                inputs[i].checked = false
            }
        }
    }
    function inputChecked() {
        var ipt = document.querySelector("#ipt")
        var inputs = document.querySelectorAll('.fl-checkBoxGroup-two input')

        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].checked) {
                ipt.checked = false
                return
            }
            ipt.checked = true
        }

    }
    let arr = {
        todos: [
            { text: 'Apple', id: 1 },
            { text: 'Orange', id: 2 },
            { text: 'Strawberry', id: 3 },
        ]
    }

    return (
        <div>
            <div className="box">
                <input id='ipt' type="checkbox" onClick={isAllChecked} />
                <span>全选</span>
            </div>
            <div className='fl-checkBoxGroup-two'>
                {
                    arr.todos.map((item) => {
                        return <div key={item.id}>
                            <input type="checkbox" onClick={inputChecked} />
                            <span>{item.text}</span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
