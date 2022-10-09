import React from 'react';
import InputPro from '..';


export default function InputProDemo1() {
  let option = [
    {
      label: 'JavaScript',
    },
    {
      label: 'TypeScript',
    },
    {
      label: 'VueJS',
    },
    {
      label: 'ReactJS',
    },
  ];
  return (<div>

    <InputPro align="top" option={option} />
    <InputPro align="bottom" option={option} />
    <InputPro align="left" option={option} />
    <InputPro align="right" option={option} />
  </div>

  );
}