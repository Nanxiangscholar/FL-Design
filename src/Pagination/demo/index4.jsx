import React from 'react'
import Paginaction from '..'
export default function index() {
  return (
    <div  className='div4'>
        <Paginaction totals={300} showSizeChanger={true} showJumpInput={true} classNames={'.div4'}/>
    </div>
  )
}