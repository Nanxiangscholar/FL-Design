import React, { useState } from 'react'
import './CheckBox.scss'
import { Props } from './checkbox'


export default function CheckBox({ text, disabled, }: Props) {
    
    
    return (
        <div className='fl-checkBox'>
            <input type="checkbox" disabled={disabled} />
            <span>{text}</span>
        </div>
    )
};