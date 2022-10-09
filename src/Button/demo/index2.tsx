import React from 'react'
import Button from '..';

export default ()=>{
    return(
        <div>
            <Button text='默认'></Button>
            <Button size='medium' text='中号'></Button>
            <Button size='small' text='小号'></Button>
            <Button size='mini' text='特小'></Button>
        </div>
    )
}
