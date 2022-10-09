import React from 'react'
import Selector from '..'
export default () => {
    let option = [
        {
          label: 'Mucy',
          value: 'mucy',
        },
        {
          label: 'Mike',
          value: 'mike',
        },
        {
          label: 'aMck',
          value: 'amck',
        },
      ]
      
    return (
        <div>
            <Selector
                option={option}
                placeholder={'请输入'}
                disable
            />
        </div>
    )
    
}