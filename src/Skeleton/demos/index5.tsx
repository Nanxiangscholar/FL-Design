import React, { useState,useEffect } from "react";

import { nanoid } from "nanoid";

import Skeleton from '..'

export default function Loading() {
 
  
  let dataSource = [
    {
      id:nanoid(),
      title: 'Beijing Bytedance Technology Co., Ltd.',
      content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
    },
    {
      id:nanoid(),
      title: 'Beijing Bytedance Technology Co., Ltd.',
      content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
    },
    {
      id:nanoid(),
      title: 'Beijing Bytedance Technology Co., Ltd.',
      content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
    },
   
  ];


  return (
    <>
      <Skeleton title avatar row={3} width={['50%', '60%','60%']} isChange data={dataSource} ></Skeleton>
    </>
   
  );
}


