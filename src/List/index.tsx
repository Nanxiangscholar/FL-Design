import React from 'react';
import { Props } from './List';
export default function Header({header}:Props) {
  return (
        <div className="fl-list-title">
            {header}
        </div>
  )
}
