import React, { useState, useRef } from 'react'
import { Props } from './table'
import Icon from './components'
import Sear from './components/index1'
import Pagination from './components/pagination'
import './style/Table.scss'


export default function index({
    titleParams, tableData, align = 'left',
    expandedRowRender, radio, radioSelectCallback,
    checked, checkedSelectCallback,
    avableSort, filter, largeDateShowNum, virtualized
    , lazyLoad, pagination, paginationAlign, changePNumCallback, changePSizeCallback
    , dropabled, dropCallback }: Props) {
    let [data, setData] = useState(false)
    let [defData, setdefData] = useState(tableData);
    let checks = useRef(null)

    let style = {
        cursor: dropabled ? 'move' : ""
    }


    //总选框
    let CheckAll = () => {
        if (checks.current) {
            let dom: any = checks.current
            let check = dom.querySelectorAll('table .concis-checkbox')
            let all: any = dom.querySelector('.all')
            let che: any = [];
            Array.from(check).slice(1, check.length).forEach((item: any, index: any) => {
                if (all.checked) {
                    item.checked = true;
                    che.push(tableData[item.dataset.a])
                } else {
                    item.checked = false;

                }

            })
            checkedSelectCallback ? checkedSelectCallback(che) : undefined;
        }

    }
    //单选框
    let Check = () => {
        let dom: any = checks.current
        let check = dom.querySelectorAll('table .concis-checkbox')
        let all: any = dom.querySelector('.all')


        let bool = true;
        let che: any = [];
        Array.from(check).slice(1, check.length).forEach((item: any) => {
            if (!item.checked) {
                bool = false;
                all.checked = false;

            } else {
                che.push(tableData[item.dataset.a])
            }
        });
        if (bool) {
            console.log(1);
            all.checked = true;
        }
        checkedSelectCallback ? checkedSelectCallback(che) : undefined;
    }

    //展开行
    let show = (e: any, item: any) => {
        data = !data;
        setData(data);
        // e.target.parentNode.parentNode.nextSibling.classList.add("active");
        let tr = e.target.parentNode.parentNode.nextSibling;
        if (data) {
            tr.style.display = 'table-row'
        } else {
            tr.style.display = 'none'

        }
    }

    //排序
    let maps = (e: any, num: any) => {

        let names = e.target.parentNode.parentNode.previousSibling.innerText
        // console.log(names);
        titleParams.forEach((item: any, index: any) => {
            if (item.title == names) {
                if (typeof item.sorter == 'boolean' && num) {
                    defData.sort((a: any, b: any) => {
                        return b[names.toLowerCase()] - a[names.toLowerCase()]
                    });
                    setdefData([...defData])
                }
                else {
                    defData.sort((a: any, b: any) => a[names.toLowerCase()] - b[names.toLowerCase()]);
                    setdefData([...defData])
                }

                if (typeof item.sorter == 'object' && num) {
                    // console.log(1);
                    defData.sort(item.sorter[num])
                    setdefData([...defData])
                }
                else {
                    // console.log(2);
                    defData.sort(item.sorter[num])
                    setdefData([...defData])
                }

                // console.log(defData[index].sorter[num]);


            }
        });

    }

    //懒加载？？？？？？

    //分页 ？？？？？？
    let handleChange = (idx: any) => {
        console.log('页码改变 => ', idx);
    }


    //拖拽开始
    let onstart = (e: any) => {
        // console.log(1, e.target.className);
        e.dataTransfer.setData('tr', e.target.className);
    }

    //放置目标前
    // let onrun = (e: any) => {
    //     var data = e.dataTransfer.getData('tr');
    //     var dom = document.getElementsByClassName(data)[0];

    //     // console.log(e.target);
    //     let news = e.target.parentNode;
    //     //insertBefore() 方法在您指定的已有子节点之前插入新的子节点。
    //     e.target.parentNode.parentNode.insertBefore(dom, news)
    //     let trs = e.target.parentNode.parentNode.children
    //     let trData: any = [];
    //     Array.from(trs).forEach((item: any, index: any) => {
    //         trData.push(tableData[item.dataset.t])
    //     });
    //     dropCallback ? dropCallback(trData) : undefined
    // }

    //交换
    let onrun = (e: any) => {
        var data = e.dataTransfer.getData('tr');
        var dom = document.getElementsByClassName(data)[0];

        // console.log(e.target);
        let news = e.target.parentNode;
        let box = e.target.parentNode.parentNode
        const temp = document.createElement('tr')
        //replaceChild() 方法用新节点替换某个子节点。
        box.replaceChild(temp, news);
        box.replaceChild(news, dom);
        box.replaceChild(dom, temp);
        let trs = e.target.parentNode.parentNode.children
        let trData: any = [];
        Array.from(trs).forEach((item: any, index: any) => {
            trData.push(tableData[item.dataset.t])
        });
        dropCallback ? dropCallback(trData) : undefined
    }

    return (
        <div>
            {/* //  表示固定列展示的数据条数 不完善 ？？？？？ */}
            <table className="table" ref={checks} style={{ overflow: virtualized == false ? 'auto' : 'hidden', maxHeight: largeDateShowNum ? (largeDateShowNum * 78 + 50) + 'px' : '' }
            }>
                <thead>
                    <tr >
                        {expandedRowRender || radio || checked ?
                            <th style={{ textAlign: (align as any) || 'left' }} >
                                {checked ?
                                    <input type="checkbox" className='concis-checkbox noActived all' id="" onChange={() => { CheckAll() }} /> : <></>
                                }
                            </th> : <></>}
                        {
                            titleParams.map((item: any, index: any) => {
                                return (
                                    <th key={item + index} className={["tableHead", align].join(' ')} style={{ textAlign: (align as any) || 'left' }}>
                                        <div className="title">
                                            <span>{item.title}</span>
                                            {item.sorter ? <Icon maps={avableSort ? maps : ''} /> : <></>

                                            }
                                            {filter && item.filter ? <Sear /> : <></>}
                                        </div>
                                    </th>
                                )
                            }
                            )

                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        defData.slice(0, virtualized ? 10 : defData.length).map((item: any, index: any) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr key={item + index} style={style} className={dropabled ? 'tr' + index : ''} draggable={dropabled ? true : false} data-t={index} onDragStart={(e) => { onstart(e) }} onDrop={(e) => { onrun(e) }} onDragOver={(ev) => { ev.preventDefault(); }}>
                                        {expandedRowRender || radio || checked ?
                                            <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>

                                                {
                                                    expandedRowRender ? <span className='anticon anticon-plus' onClick={(e) => show(e, item)}>+</span> :
                                                        radio ? <input className="radio" type="radio" onChange={radioSelectCallback ? () => { radioSelectCallback(item) } : undefined} /> :
                                                            checked ? <input className="concis-checkbox noActived" type="checkbox" data-a={index} onChange={() => { Check() }} /> : <></>

                                                }

                                            </td> : <></>}

                                        <td style={{ textAlign: (align as any) || 'left' }}>{item.name}</td>
                                        <td className={align} style={{ textAlign: (align as any) || 'left' }}>{item.salary}</td>
                                        <td className={align} style={{ textAlign: (align as any) || 'left' }}>{item.address}</td>
                                        <td className={align} style={{ textAlign: (align as any) || 'left' }}>{item.email}</td>
                                    </tr>
                                    {
                                        expandedRowRender ?
                                            <tr style={{ textAlign: (align as any) || 'left', display: 'none' }}>
                                                <td colSpan={6}>{expandedRowRender(item)}</td>
                                            </tr> : <></>
                                    }
                                </React.Fragment>


                            )
                        })
                    }
                </tbody>
            </table >

            {
                pagination ? <Pagination
                    totalNumber={57} // totalNumber表示数据总数
                    pageSize={1}  //pageSize表示一页显示的数据
                    currentPage={1} //currentPage表示当然初始化所在的页码，默认为1
                    middlePage={5} //middlePage为页码中间所显示的页数。默认为5
                    onChange={handleChange} //当页码被改变调用的函数，改函数有一个参数即当前改变的页码
                    showPages //showPages 是否显示分页页码
                    showGo //showPrev 是否显示上一页按钮
                    showPrev //showNext 是否显示下一页按钮
                    showNext //showGo 是否显示跳转按钮
                /> : <></>
            }
        </div >
    )
}
