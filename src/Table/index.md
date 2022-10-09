---
title: Table 表格
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
  mobile: false
---

# Table 表格

用于数据收集展示、分析整理、操作处理。

## 基本使用

基础表格

```tsx
import React from 'react';
import { Table } from 'react-view-design';
import {columns,defaultData} from './Page'
export default () => <Table titleParams={columns} tableData={defaultData} />;
```


## 对齐方式与宽度
配置表头数据和 align 自定义宽度和对齐方式

```tsx
import React from 'react';
import { Table } from 'react-view-design';
import {columns,defaultData} from './Page'
export default () => <Table align="center" titleParams={columns} tableData={defaultData} />;
```


## 展开行

配置 expandedRowRender 回调函数对展开行进行

```tsx
import React from 'react';
import { Table } from 'react-view-design';
import {columns,defaultData} from './Page'
export default () => <Table 
titleParams={columns} 
tableData={defaultData} 
expandedRowRender={(record: { name: string })=> `Th is No.${record.name} description.`}
/>;
```

## 单选
配置 radio 以支持单选，radioSelectCallback 获取选择结果
```tsx
import React from 'react';
import { Table } from 'react-view-design';
import {columns,defaultData} from './Page'
export default () => <Table 
titleParams={columns} 
tableData={defaultData} 
radio
radioSelectCallback={
  (a) => console.log(a)
  }
/>;
```

## 多选
配置 checked 以支持多选，checkedSelectCallback 获取选择结果

```tsx
import React from 'react';
import { Table } from 'react-view-design';
import {columns,defaultData} from './Page'
export default () => <Table 
titleParams={columns} 
tableData={defaultData} 
checked
checkedSelectCallback={
  (a) => console.log(a)
  }
/>;
```

## 排序
配置表头数组结构 sorter，默认排序设定值为 true 即可，自定义排序可设定为数组，0 下标位表示升序规则，1 下标位表示降序规则

```tsx
import React from 'react';
import { Table } from 'react-view-design';
import {columns,defaultData} from './Page/index1.tsx'

// console.log(column)
export default () => <Table 
titleParams={columns} 
tableData={defaultData} 
expandedRowRender={(record: { name: string })=> `Th is No.${record.name} description.`}
avableSort
/>;
```

## 筛选
配置表头数组结构 filter，以及组件传参 filter，开启筛选

```tsx
import React from 'react';
import { Table } from 'react-view-design';
import {columns,defaultData} from './Page/index1.tsx'

// console.log(column)
export default () => <Table 
titleParams={columns} 
tableData={defaultData} 
avableSort
filter 
/>;
```

以下虚拟列表滚动、懒加载、分页为大数据时的建议方案，无法同时使用，只能选择其一进行开发


## 虚拟列表滚动
largeDateShowNum 表示固定列展示的数据条数，默认 10 条，通过 virtualized 开启虚拟列表

```tsx
import React from 'react';
import { Table } from 'react-view-design';
import {columns,defaultData} from './Page/index2.tsx'

// console.log(column)
export default () => <Table 
titleParams={columns} 
tableData={defaultData} 
largeDateShowNum={15}
avableSort
virtualized={false}
checked
/>;
```


## 懒加载
largeDateShowNum 表示初始展示条数，默认 10 条，通过 lazyLoad 开启懒加载

```tsx
import React from 'react';
import { Table } from 'react-view-design';
import {columns,defaultData} from './Page/index2.tsx'

// console.log(column)
export default () => <Table 
titleParams={columns} 
tableData={defaultData} 
largeDateShowNum={10}
lazyLoad
checked
/>;
```


## 分页
通过 pagination 开启分页，通过 paginationAlign 改变分页对齐方式

```tsx
import React from 'react';
import { Table } from 'react-view-design';
import {columns,defaultData} from './Page/index2.tsx'

// console.log(column)
export default () => <Table 
titleParams={columns} 
tableData={defaultData} 
largeDateShowNum={10}
pagination
checked
paginationAlign="center"
// changePNumCallback={changePNumCallback}
// changePSizeCallback={changePSizeCallback}
/>;
```


## 拖拽
通过 dropabled 开启拖拽

```tsx
import React from 'react';
import { Table } from 'react-view-design';
import {columns,defaultData} from './Page'
export default () => <Table 
titleParams={columns} 
tableData={defaultData} 
dropCallback={(tableData: Array<object>) => {
    console.log(tableData);
  }}
dropabled
checked
/>;
```


<API></API>