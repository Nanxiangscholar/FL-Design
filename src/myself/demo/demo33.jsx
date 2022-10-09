import React from 'react';
import './demo3.jsx'
import cut from './demo3'
import show from './demo3'
export default function Content({cut ,is}){
    function t(){
     cut();
    }
    return (
        <div className="CContent">
            <h1>Title</h1>
            <span>This is content This is content </span>
            <p onClick={()=>cut(show)}>close</p>
        </div>
    )
}