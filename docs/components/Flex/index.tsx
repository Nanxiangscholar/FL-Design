import React from 'react';
import './index.scss';
import one from '../../assets/images/one.png';
import two from '../../assets/images/two.png';
import three from '../../assets/images/three.png';

const Flex = () => {
  return (
    <div className="Flex-index">
      <ul>
        <li>
          <img src={one} alt="" />
          <h3>开箱即用</h3>
          <p>我们追求的是极简主义，帮助开发者零成本上手，让所有注意力都能放在业务开发上</p>
        </li>
        <li>
          <img src={two} alt="" />
          <h3>丰富多样</h3>
          <p>
            丰富的 组件库
            扩展，不止于市面的单一组件，各个组件都有不同的样式，追求多样化多元化样式风格
          </p>
        </li>
        <li>
          <img src={three} alt="" />
          <h3>多人开发</h3>
          <p>任何人都可以加入我们，只要你有想法。我们欢迎任何一位开发者的到来！</p>
        </li>
      </ul>
    </div>
  );
};

export default Flex;
