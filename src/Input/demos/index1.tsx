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

    <InputPro align="right" option={option} />
  </div>

  );
}