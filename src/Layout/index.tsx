import React, { Children } from 'react'
import './Layout.scss'
import {Props} from './layout'
export default function Layout({className,row,extraStyle,children}:Props) {
  let style = extraStyle?extraStyle:{};
  style.flexGrow=row;
  let props = [
    className?'fl-layout-'+className:'fl-layout',
  ]
  return (
    <div className={props.join(' ')} style={style}>{children}</div>
  )
}
