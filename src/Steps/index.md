---
title: Steps 步骤条
nav:
  title: 组件
  path: /common
group:
  title: 导航
  mobile: false
---
## Steps 步骤条
引导用户按照流程完成任务的导航条。

## 何时使用
当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 基本使用
<code src="./demos/index1.tsx"></code>

## 额外参数
<code src="./demos/index2.tsx"></code>

## 遍历使用
<code src="./demos/index3.tsx"></code>

## 可点击
<code src="./demos/index4.tsx"></code>


## 代码块
- 试用一下

```jsx
import React from 'react'
import Index from './index'
export default function index4() {
  let data = ['Waiting','In Process','Finished'] ;
  let title = ['subTitle','subTitle','subTitle'];
  let explain = ['this is description','this is description','this is description'];
  let pointerEvent = 'auto';
  return (
    <div>
        <Index data={data}  title={title} explain={explain} pointerEvent={pointerEvent}/>
    </div>
  )
}

```

<API></API>