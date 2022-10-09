import React, { useCallback, useState } from 'react'
import { Props } from '../radio'
import '../Radio.scss'


export default function RadioGroup({ value, children, disabled, canAddOption, boxStyle }: Props) {
  let [selectIndex, setSelectIndex] = useState(value || 5); //初始选中索引
  let [renderOptions, setRenderOptions] = useState(children); // 子元素的值
  // const [addOptionVal, setAddOptionVal] = useState('');
  const [showAddOption, setShowAddOption] = useState(canAddOption && false); // 支持手动扩展
  // console.log(renderOptions);

  let props = [
    'fl-radio',
    value ? 'fl-radio--' + value : '',
    disabled ? 'is-disable' : '',
  ]

  // 设置点击
  let changeOptions = (item: Props, i: number, e: any) => {
    if (item.disabled) return;
    setSelectIndex(i);
    canAddOption && setShowAddOption(false);
  }

  // 新增按钮
  let addOptions = () => {
    //新增options
    setSelectIndex(renderOptions.length);
    setShowAddOption(true);
  };

  // 设置新增
  const handleKeyUp = (e: any) => {
    const {keyCode,target} = e
    //新增确认
    if (keyCode == 13) {
      // console.log(renderOptions);
      
      setRenderOptions((old:any) => {
        let addOption = {
          props: {
            children: target.value,
          },
        };
        return [...old, addOption];
      });
      setShowAddOption(false);
      target.value = ''
    }
  };

  // 盒子样式的class
  const boxStyleClassName = 
    (props: Props, i: number) => {
    if (props.disabled) {
      return ' fl-radio--squareDisabled';
    }
    if (i == selectIndex) {
      return ' fl-radio--squareChecked';
    }
    return '';
  }


  return (
    <div className='radioBox'>
      {
        renderOptions.map((item: any, index: number) => {
          return (
            boxStyle ? (
            <div className={'fl-radio--square' + boxStyleClassName(item.props, index)} key={index}
            style={item.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
            onClick={(e) => changeOptions(item.props, index, e)}
            >{item.props.children}</div>
            ):(
            <div className='fl-radio' key={index} style={item.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
              onClick={(e) => changeOptions(item.props, index, e)}>
              <div className={selectIndex === index ? 'fl-radio--style fl-radio-checked' : 'fl-radio--style '}
                style={item.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}></div>
              <span className={item.props.disabled ? 'fl-radio--disabled' : ' '}>{item.props.children}</span>
            </div>
            )
          )
        })
      }
      {
        canAddOption ? (
          boxStyle ? (
            <div className='addRadioBox' onClick={() => addOptions()}>
              <div className={selectIndex === renderOptions.length ? 'fl-radio--square fl-radio--squareChecked' : 'fl-radio--square'}>addOption...</div>
              <input type="text" style={selectIndex === renderOptions.length ? { display: 'block' } : { display: 'none' }} 
              onKeyUp={handleKeyUp}/>
            </div>
          ) : (
            <div className='addRadioBox' onClick={() => addOptions()}>
              <div className='fl-radio'>
                <div className={selectIndex === renderOptions.length ? 'fl-radio--style fl-radio-checked' : 'fl-radio--style '}></div>
                <span>More...</span>
              </div>
              <input type="text" style={selectIndex === renderOptions.length ? { display: 'block' } : { display: 'none' }} 
              onKeyUp={handleKeyUp}/>
            </div>)
        ) : (<></>)
      }
    </div>
  )
}
