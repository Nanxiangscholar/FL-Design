import React from 'react'
import './Result.scss'
import { Props } from './result'


export default function Result({children, title, subTitle, extra }: Props) {
  return (
    <div className='fl-result'>
      <div className='fl-result-icon'>
        {children}
        {/* <svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" fontSize='72px' color='#5468ff' aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg> */}
      </div>
      <p className='fl-result-title'>{title}</p>
      <p className='fl-result-subtitle'>{subTitle}</p>
      <div>{extra}</div>
    </div>
  )
}
