import React from 'react'
import BackTop from '../index.tsx'
export default function index1() {
  return (
    <>
      <div>让滚动条飞一会儿</div>
      {/* 传入子标签 作为点击元素 */}
      <BackTop visibilityHeight={200} ></BackTop>
    </>
  )
}
