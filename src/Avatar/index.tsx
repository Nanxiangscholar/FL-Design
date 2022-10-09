import React, { Children,useMemo,useEffect,useRef} from 'react'
import './style/Avatar.scss'
import { avatarProps } from './Avatar';
export default function Avatar({children,style,size,shape,autoFixFontSize,triggerType,triggerIcon,triggerClick,groupStyle}:avatarProps) {
  let Props =[
    children,
    // style = {

    // },
    size =size,
    shape,
    autoFixFontSize = true,
    triggerType = 'button',
    triggerIcon,
    triggerClick,
    groupStyle={}
  ]
  const textRef = useRef(null);
  const formatStyle = useMemo(() => {
    // 整合所有头像传参样式
    const returnStyle: any = {...style };
      // 单头像
      if (size) {
        returnStyle.width = `${size}px`;
        returnStyle.height = `${size}px`;
        returnStyle.borderRadius = shape=='square'?`20%`:'50%';

      }
    
    return returnStyle;
  }, [style, size,shape]);

  useEffect(() => {
    autoFixFontSizeHandler();
  }, []);
  const autoFixFontSizeHandler = () => {
    if (autoFixFontSize) {
      // 如果用户配置了文本自适应
      if (textRef.current) {
        const textDomWidth = (textRef.current as HTMLElement).clientWidth;

        
        const avatarSize =  size || 40;


        if (textDomWidth - avatarSize >= 0) {
          // 文本不够，需要自适应
          console.log(11111111111);
          
          (textRef.current as HTMLElement).style.transform = `scale(${
            1 - (textDomWidth - avatarSize + 5) / 100
          })`;
        }
      }
    }
  };
// console.log(formatStyle);

  return (
    <div className={'fl-avatar'} style={formatStyle} >
      <div className='text-ref' ref={textRef}><span>{children}</span></div>
    </div>
  )
}

