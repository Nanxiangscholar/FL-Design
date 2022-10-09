import React from 'react'
import { Props } from './List';
export default function List({dataSource,size}:Props) {
  let props = [
    'fl-list',
    size?'fl-list-'+'item-'+size:'',
  ]
  return (
    <div>
      {
        dataSource!.map((item:any) =>{
            return (
                <div className={props.join(' ')} key={item}>{item}</div>
            )
        }
        )
    }
    </div>
  )
}
