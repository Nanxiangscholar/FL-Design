import React from 'react';
import './Result.scss';
import { Props } from './result';

export default function Result({ children, title, subTitle, extra }: Props) {
  return (
    <div className="fl-result">
      <div className="fl-result-icon">{children}</div>
      <p className="fl-result-title">{title}</p>
      <p className="fl-result-subtitle">{subTitle}</p>
      <div>{extra}</div>
    </div>
  );
}
