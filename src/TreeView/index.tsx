import React, { FC } from 'react';
import './index.scss'
import { useEffect, useState } from 'react';
import {treeType,treeViewProps} from './config';


function Treeview(props:treeViewProps) {
  const {treeData,defaultOpen,callback,avaDrop,dropCallback} = props;
  // 设置初始二维数据
  const [treeDate,setTreeDate] = useState(treeData);

  // 新建一个一维数组用于渲染数据
  const [oneTreeDate,setOneTreeDate] = useState(treeDate);

  // 1.将用户传进来的数据进行重构
  // 2.提取重要的属性
  //   - title 内容本身
  //   - value 没用
  //   - shildren [] 子分支
  //   - 在重构的数据身上添加prev指向他的父节点

  // 生命周期
  useEffect(()=>{
    // 在页面进入之初调用一次重构函数
    newTreeDate(treeData,1,null);
    dimensional(treeDate)
  },[]);

  // 监视oneTreeDate的变化
  // 该方法用于当原先的二维数组发生改变则调用该方法，触发页面的更新
  const dimensional = (
    arrs:Array<treeType>
    )=>{
        // 将新的数据重构为一维数组,
        setOneTreeDate((ele)=>{
          let newArr = [...arrs]
          let arr:Array<treeType> = [];
          restructure(newArr);
          function restructure(chil:Array<treeType>) {
            chil.forEach(tit => {
              arr.push(tit)
              if (tit.children) {
                restructure(tit.children)
              }
            });
          }
          // console.log(newArr);
          // console.log(arr);
          return arr
        })
  }


  // 声明一个重构数据的方法
  const newTreeDate = (
    treeDates:Array<treeType>,
    numberOf:number,
    fatherNode:Object | null
    ) =>{
    // 深拷贝一份传入的数据
    const newArr = [...treeDates];

    // 遍历数据重构
    newArr.forEach((ele:any,index) => {
      // 添加prev指向父节点，没有则指向null
      ele.prev = fatherNode;
      if (defaultOpen) {
        ele.height = 30;
        // console.log(ele,defaultOpen);
     }else{
        // console.log(ele.prev);
        if (ele.prev === null) {
          ele.height = 30;
        }else{
         ele.height = 0;
        }
     }
      // 先默认为##未选中##
      // 如果是父节点
      //  - 未选中 false
      //  - 选中   true
      //  - 半选   selection
      ele.checked = "false";
      ele.level = numberOf; //这是第一层的层数
      if (ele.children) {
        // 有子节点
        // - 1.有展开按钮
        // - 2.可控制子节点的高度
        // - 3.需要有一个属性代表他是否处于展开状态
        // 默认开启状态
        if (defaultOpen) {
          ele.isOff = true;
        }else{
          ele.isOff = false;
        }
        // 递归再次遍历重构
        newTreeDate(ele.children,numberOf + 1,ele)
      }else{
        // 无子节点
        // 记录当前层数
        // 有了这个level就可以标记这一层的div向左移动
        // 标记这个节点为尾节点
        ele.isChildren = true;
        ele.level = numberOf;
      }
    });

  }

  // 点击展开方法
  const callBack = (
    group:number,
    level:number,
    isOff:boolean,
    title:string,
    ele:treeType
    )=>{    
    if (ele.isChildren !== undefined) {
      return
    }else{
      // 得到对应点击数据的group和level
      // 将该对象下children中的所有数据对象的height变为0px
      //   1.再次点击的话判断分支含有isOff的布尔是否为false
      //   2.false则只用将单个分支展开
      // console.log(group,level,isOff,title);
      setTreeDate(()=>{
        let newArr = [...treeDate];
        let obj:{
          children?:Array<treeType>
          isOff?:boolean
        } = {}; 
        // 保留那个被点击的数据
        // 因为是浅拷贝，所以改变该值newArr也会改变
        forArr(newArr);
        function forArr(arr:Array<treeType>) {
          arr.forEach(ele => {
            if (ele.group === group && ele.level === level && ele.title === title) {
              if (ele.isOff === true || ele.isOff === false ) {
                 obj = ele;
              }
            }
            if (ele.children !== undefined) {
              forArr(ele.children)
            }
          });
        };
        forArrTwo(obj.children);
        function forArrTwo(objs:any):void {
          objs.forEach((ele:treeType) => { 
            if (isOff) {
              ele.height = 0;
              obj.isOff = false
            }else{
              ele.height = 30;
              obj.isOff = true
            }
            // console.log(ele);
            if (ele.children !== undefined && ele.isOff === true) {
                forArrTwo(ele.children)
            }
          });
        };


      return newArr
      })
    }

  }

  // 勾选方法
  const Mychecked=(
    checked:string,
    group:number,
    level:number,
    title:string,
    disabled:boolean
    ):void => {
    if (disabled) return
    // console.log(checked,group,level,title);
    let checks = "";
    if (checked === "true") {
      checks = "false";
    }else if(checked === "false"){
      checks = "true";
    }else{
      checks = "false";
    }

    let arr = [...treeDate];
    let obj:treeType = {
      title: '',
      value: '',
      group: 0,
      level: 0,
      prev: null,
      checked: ''
    }; 
    forArr(arr);
    // 筛选出被点击的那个数据给obj单独控制
    function forArr(arr:Array<treeType>):void {
      arr.forEach((ele:treeType) => {
        if (ele.group === group && ele.level === level && ele.title === title) {
          if (ele.isOff === true || ele.isOff === false ) {
             obj = ele
          }else{
            obj = ele
          }
        }
        if (ele.children !== undefined) {
          forArr(ele.children)
        }
      });
    }

    //#region 
    // 先默认为##未选中##
    // 如果是父节点
    //  - 未选中 false
    //  - 选中   true
    //  - 半选   selection
    // 1. 父节点选中，子节点下所有都要选中
    // 2. 子节点只有部分被选中，父节点处于半选状态
    // 3. ...
    //#endregion
    
    // console.log(obj);

    if (obj.children === undefined) {
      // 说明点击的是单子节点
      // 每点击子节点就要判断同级的子节点是否都被选中
      // - 使用双向链表特性，监测该结点指向的父节点下children是否都处于true状态
      // - 所有都选 父节点变全选 - 每个都为true
      // - 部分被选 父节点变半选 - 
      // - 所有不选 父节点变空状态 - 每个为false
      obj.checked = checks; //改变状态
      // 判断父级下的children是否有以上三个条件符合
      // 当点击当前节点，需要往上层，上上层不断读取其节点下的children是否都被选中
      // 相当于重复了这一层查询的操作
      // console.log(obj);
      changeTree(obj.prev);
      function changeTree(node:any) {
        let flags = "";
        // 判断传入数组的每个对象状态
        if (node.children.every((ele:treeType) => {
          return ele.checked === "true"
        })) {
          flags = "true" // 全选
        }else if(node.children.every((ele:treeType) => {
          return ele.checked === "false"
        })){
          flags = "false" // 全不选
        }else{
          flags = "selection"  // 半选
        }
        // 改变父节点的状态
        if (flags === "true") {
          node.checked = "true";
        }else if(flags === "false"){
          node.checked = "false";
        }else if(flags = "selection"){
          node.checked = "selection";
        }
        // console.log(node);
        if (node.prev !== null) {
          changeTree(node.prev)
        }
      } 
    }else{
      // 说明点击的是父节点，将所有children变成选中
      // 点击有子节点的节点也要判断该节点同级节点是否也被选中，都被选中则改变父节点状态
      // - 所有都选 父节点变全选
      // - 部分被选 父节点变半选
      // console.log(obj.prev);
      obj.checked = checks;
      // 判断当前为选中状态还是未选中状态
      check(obj.children,checks);
      // check(obj.children,'true');
      // 递归将所有子节点选中
      function check(
          arr:Array<treeType>,
          flag:string
        ){
        arr.forEach(ele => {
            ele.checked = flag;
            if (ele.children) {
              check(ele.children,flag)
            };
        });
      } 
      if (obj.prev !== null) {
        changeTree(obj.prev);
      }
      function changeTree(node:any) {
        let flags = "";
        // 判断传入数组的每个对象状态
        if (node.children.every((ele:treeType) => {
          return ele.checked === "true"
        })) {
          flags = "true"  // 全选
        }else if(node.children.every((ele:treeType) => {
          return ele.checked === "false"
        })){
          flags = "false"  // 全不选
        }else{
          flags = "selection"  // 半选
        }
        // 改变父节点的状态
        if (flags === "true") {
          node.checked = "true";
        }else if(flags === "false"){
          node.checked = "false";
        }else if(flags = "selection"){
          node.checked = "selection";
        }
        // console.log(node);
        if (node.prev !== null) {
          changeTree(node.prev)
        }
      } 
    }


    // 更改状态
    setTreeDate(arr);

    // 从一维数组中循环找出被选中的数据也就是checked为tree的数据
    let arrs:Array<treeType> = []
    oneTreeDate.forEach(ele => {
        // console.log(ele.checked);
        if (ele.checked === "true" && ele.children === undefined) {
          arrs.push(ele)
        }
    });
    // 调用回调将数据传回给用户
    callback(arrs,treeDate)
    
  }

  

  const [myTreeNode,setMyTree] = useState<any>(); //纪录被拖拽的元素

  // 拖拽
  const dragStartTree=(e:any,ele:treeType)=>{
    // console.log(e,ele,'用户开始拖动元素时触发');
    // 将被拖拽的元素记录
    setMyTree(ele);
  }

  const drop=(e:any,eles:treeType)=>{
    e.preventDefault();
    // 拖拽与悬停为同一个
    if (eles.title === myTreeNode.title) return
    // 拖拽的父级与悬停一致
    if (eles === myTreeNode.prev) return
    // 被拖拽为根节点
    if (myTreeNode.prev === null) return
    // 拖拽的是悬停的父级
    if (myTreeNode === eles.prev) return



    // 被拖拽的元素悬停的地方
    // - 如果是没有子节点的节点，则与之替换
    // - 如果是有字节点的集合节点，则将其放在该节点中，原先的数据删除
    let newArr = [...treeDate]; // 深拷贝一份数据
    let oneObj:{
      tree:any
      index:number
    } = { // 记录被拖拽的节点
      tree:null,
      index:0
    };
    let twoObj:{
      tree:any
      index:number
    } = { // 记录悬停节点
      tree:null,
      index:0
    };
    if (eles.isChildren) {
      // 表示为普通节点--执行替换
      // 根据title找到newArr中的对应数据
      // console.log(myTreeNode);
      // console.log(newArr);


      // 找出这两个节点
      myWatch(newArr);
      function myWatch(arr:Array<treeType>) {
        arr.forEach((ele:any,index:number) => {
          if (ele.title === myTreeNode.title) {
            // 被拖拽的节点
            // - 将被拖拽节点删除
            oneObj.tree = ele;
            oneObj.index = index;

          }else if(ele.title === eles.title){
            // 悬停的节点
             twoObj.tree = ele;
             twoObj.index = index;    
          }
          if (ele.children !== undefined) {
             myWatch(ele.children)
          }
        });
      }

      // 更换这两个数据的位置
      // - 使用替换法,拖拽节点父级的对应索引坑位放悬停节点
      // - 悬停节点父级对应索引坑位方拖拽节点
      // - 如果拖拽的节点没有父级,说明他是第一层的节点
      if (oneObj.tree.prev === null) {
        newArr.splice(oneObj.index,1,twoObj.tree);
        twoObj.tree.prev.children.splice(twoObj.index,1,oneObj.tree);
      }else{
        if (twoObj.tree.prev === null) {
          return
        }
        oneObj.tree.prev.children.splice(oneObj.index,1,twoObj.tree);
        twoObj.tree.prev.children.splice(twoObj.index,1,oneObj.tree);
      }


      // console.log(oneObj.tree.prev.children,'被拖拽的父级');
      // console.log(twoObj.tree.prev.children,'悬停父级');

      // 需要交换两个数据的部分参数(属性)
      // 1.group; 2.level; 3.prev;
      // 用一个中间对象接收记录这些属性
      let centerObj = {
        group:oneObj.tree.group,
        level:oneObj.tree.level,
        prev:oneObj.tree.prev
      }
      oneObj.tree.group = twoObj.tree.group;
      oneObj.tree.level = twoObj.tree.level;
      oneObj.tree.prev = twoObj.tree.prev;
      twoObj.tree.group = centerObj.group;
      twoObj.tree.level = centerObj.level;
      twoObj.tree.prev = centerObj.prev;

      if (oneObj.tree.isChildren === undefined) {
          // 如果拖拽是父级盒子
          // 悬停是单子节点,就需要替换之后将该父级盒子下的所有子级节点的属性更改
          changeLevel(oneObj.tree.children,oneObj.tree.level)
          function changeLevel(arr:Array<treeType>,lev:number) {             
            arr.forEach(ele => {
              ele.level = lev + 1;
              if (ele.children !== undefined) {
                changeLevel(ele.children,ele.level)
              }
            });
          }
      }
      // console.log(centerObj);
    }else{
      // 悬停的对象为父节点集合
      // 1. 拖拽的是子节点则将子节点放置于悬停节点父级之中
      // 2. 拖拽的是父节点则将该父节点集合放置于悬停节点父级之中
      // 找出这两个节点
      myWatch(newArr);
      function myWatch(arr:Array<treeType>) {
        arr.forEach((ele:treeType,index:number) => {
          if (ele.title === myTreeNode.title) {
            // 被拖拽的节点
            // - 将被拖拽节点删除
            oneObj.tree = ele;
            oneObj.index = index;

          }else if(ele.title === eles.title){
            // 悬停的节点
             twoObj.tree = ele;
             twoObj.index = index;    
          }
          if (ele.children !== undefined) {
             myWatch(ele.children)
          }
        });
      }
      // 往悬停节点盒子集合中添加拖拽的节点
      // 原节点要删除,同时如果原节点没有子级了要变成普通节点!!!
      if (oneObj.tree.prev === null) {
        // 说明拖拽元素为第一层的
        // 这就需要对newArr进行操作
        newArr.splice(oneObj.index,1)
      }else{
        // 删除原先的数据
        oneObj.tree.prev.children.splice(oneObj.index,1);
        if (oneObj.tree.prev.children.length === 0) {
          oneObj.tree.prev.isChildren = true
        }
      }
      twoObj.tree.children.push(oneObj.tree)
      // 更改拖拽的数据的部分属性
      // group level prev
      oneObj.tree.group = twoObj.tree.group;
      oneObj.tree.level = twoObj.tree.level + 1;
      oneObj.tree.prev = twoObj.tree;
      // 如果拖拽的是包含子节点的父盒子集合，
      // 并且悬停的是一个盒子.就需要对拖拽的盒子集合下的所有子节点进行修改属性level
      if (oneObj.tree.isChildren === undefined) {
        // 如果拖拽是父级盒子
        // 悬停的也是盒子,就需要替换之后将该父级盒子下的所有子级节点的属性更改
        changeLevel(oneObj.tree.children,oneObj.tree.level)
        function changeLevel(arr:Array<treeType>,lev:number) {             
          arr.forEach(ele => {
            ele.level = lev + 1;
            if (ele.children !== undefined) {
              changeLevel(ele.children,ele.level)
            }
          });
        }
      }
    }
    // 调用因数据发生改变而产生页面更改的方法
    dimensional(newArr)
    // 触发回调函数,将参数返回给使用者
    dropCallback([oneObj,twoObj],newArr)
  }

  const dropOver = (e:any)=>{
    // console.log(e,ele,'进入该容器');
    e.preventDefault();
  }

  
  return (
    <div style={{width:"100%"}}>
        {
          oneTreeDate.map((ele,index)=>{
            return (
               <Tree 
                title={ele.title}
                key={index}
                level={ele.level}
                height={ele.height}
                isChildren={ele.isChildren}
                group={ele.group}
                callBack={callBack}
                isOff={ele.isOff}
                checked={ele.checked}
                Mychecked={Mychecked}
                disabled={ele.disabled}
                dragStartTree={dragStartTree}
                drop={drop}
                dropOver={dropOver}
                ele={ele}
                avaDrop={avaDrop} 
                value={''} 
                prev={null} ></Tree>
            )
          })
        }
    </div>
  )
}


interface two extends treeType {
  level:any
}

const Tree:FC<two> = (props)=> {
  const {
    title,
    level,
    height,
    isChildren,
    group,
    isOff,
    callBack,
    checked,
    Mychecked,
    disabled,
    dragStartTree,
    drop,
    dropOver,
    ele,
    avaDrop} = props;

    let style:{
      paddingLeft:string
      height:string
    } = {
      paddingLeft:`${level*10}px`,
      height:`${height}px`
    }
    return (
      <div className='treeNode' style={style} >
        {
          isChildren ? 
          <span className='arrowFalse'></span>:
          <span 
          className='arrow' 
          onClick={()=>callBack(group,level,isOff,title,ele)}
          style={{
            transform:isOff ? "rotate(0deg) translateY(4px)":"rotate(-90deg) translateY(4px)",
            
          }}
          ></span>
        }
          <div 
          onClick={()=>Mychecked(checked,group,level,title,disabled)}
          className={disabled?"disAbleCheck checkBox":"checkBox"}>
             <span className={
               checked==="true"?(disabled?"disAbleCheck":"Select"):(checked==="false"?(disabled===true?"disAbleCheck":""):(disabled?"disAbleCheck":"halfSelection"))
               }>
             </span>
          </div>
        <span 
        className={disabled?"disAble":""}
        onClick={()=>callBack(group,level,isOff,title,ele)}
        draggable="true"
        onDragStart={(e) => avaDrop?dragStartTree(e,ele):""}
        onDrop={(e) => avaDrop?drop(e, ele):""}
        onDragOver={(e) => avaDrop?dropOver(e, ele):""}
        >
          {
           title
          }
        </span>
      </div>
    )
}




export default Treeview



