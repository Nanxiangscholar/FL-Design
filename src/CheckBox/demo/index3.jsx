import React from 'react'
import CheckBox from '..'

export default () => {
    return (
        <div className='fl-checkBoxGroup-one'>
            <CheckBox text='Apple' />
            <CheckBox text='Orange' />
            <CheckBox text='Strawberry' disabled />
        </div>
    )
}
