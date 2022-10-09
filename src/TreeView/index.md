---
title: TreeView 树型控件
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
  mobile: false
---

## TreeView 树型控件

## 何时使用
> 我也不知道欸！😋😋😋

## 基本使用

<code src='./demo/index.jsx'></code>

> 默认为折叠状态,`callback`有两个参数;
> - 参数一: 被选择的数据
> - 参数二: 所有数据(二维)

## 默认展开

<code src='./demo/index2.jsx'></code>

> 添加`defaultOpen`为展开状态

## 禁用

<code src='./demo/index3.jsx'></code>

> 添加配置项`disabled:true`将该节点标记为不可选

## 拖拽

<code src='./demo/index4.tsx'></code>

> 添加`avaDrop`设置为可拖拽,两者都是单节点则替换;悬停为节点盒子则添加;*根节点无法拖动*
> - `dropCallback`返回两个参数
>  - 参数一: 拖拽的数据和悬停松手的数据
>  - 参数二: 所有数据



<API></API>