import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Props } from './Steps';
import Div from './demos/index1_1';
import '../themes/Steps.scss';
export default function Index({ data, title, explain, pointerEvent }: Props) {
  let titleS = title ? title : ['', '', ''];
  let explainS = explain ? explain : ['', '', '', ''];
  pointerEvent ? 'auto' : 'none';
  let code: any = useRef()
  let style: {} = { pointerEvents: pointerEvent, }

  useEffect(() => {
    // 添加组件给第一个儿子
    let style = {paddingTop:'2px',backgroundColor:'transparent'};
    let div = React.createElement('div', {title:'请叫我帅锅',style:style}, <Div />);
    let parent: any = code.current.children[0].children[0];
    ReactDOM.render(div, parent);
  })
  
  function click(e: any) {
    let id = e.currentTarget.id
    // 儿子的id
    // console.log(id);
    // 对应儿子的span元素 
    // console.log(e.currentTarget.children[0]);
    let parent: any = code.current.children;
    // 儿子集合 0  1  2  
    // console.log(parent);

    for (let i = 0; i < id - 1; i++) {
      let span = parent[i].children[0];
      let title = parent[i].children[1].children[0];
      span.innerHTML = ''
      let div = document.createElement('div');
      span.appendChild(div);
      ReactDOM.render(<Div />, div);
      // 在这里加入 样式
      title.style.color = '#000';
      div.style.paddingTop = '2px';
      div.style.backgroundColor = 'transparent';
      span.style.backgroundColor = '#ffffff';
      span.style.border = '1px solid #1890ff';
    }
    let span = parent[id - 1].children[0];
    let title = parent[id - 1].children[1].children[0];
    span.innerHTML = id;
    // 在这里加入 样式
    title.style.color = '#000';
    span.style.color = '#ffffff';
    span.style.backgroundColor = '#1890ff';

    for (let i = id; i < data.length; i++) {
      let title = parent[i].children[1].children[0];
      let span = parent[i].children[0];
      span.innerHTML = parent[i].id;
      // 在这里加样式 改变样式
      title.style.color = '#909399';
      span.style.color = '#909399';
      span.style.backgroundColor = '#ffff';
      span.style.border = '1px solid #909399';
    }
  }

  return (
    <div ref={code} className="fl-div"  >
      {
        data.map((item: any, index: any) => {
          return (
            <div style={style} key={index} id={index + 1} onClick={click} className="fl-child" >
              <span className='fl-child-radius' >{index + 1}</span>
              <div className='fl-child-two'>
                <span className='fl-child-two-one'>{item}</span>
                <span className='fl-child-two-two'>{titleS[index]}</span>
                <div className='fl-child-two-div'>{explainS[index]}</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}