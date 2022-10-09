import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { range } from './utils';
import '../style/pagination.scss';

class Pagination extends Component<any, any>{
    static propTypes = {
        currentPage: PropTypes.number,
        pagesPage: PropTypes.bool,
        totalNumber: PropTypes.number,
        pageSize: PropTypes.number,
        middlePage: PropTypes.number,

        showGo: PropTypes.bool,
        showPages: PropTypes.bool,
        showPrev: PropTypes.bool,
        showNext: PropTypes.bool
    }
    static defaultProps = {
        currentPage: 1,
        pagesPage: true,
        middlePage: 5,

        showGo: false,
        showPages: true,
        showPrev: false,
        showNext: false
    };

    state = {
        currentPage: this.props.currentPage,
        pageCount: Math.ceil(this.props.totalNumber / this.props.pageSize)
    };
    constructor(props: any) {
        super(props);
    }
    componentWillReceiveProps(nextProps: any) {
        const { onChange } = this.props;

        // 更新当前页码
        if (nextProps.currentPage !== this.props.currentPage) {
            this.setState({
                currentPage: nextProps.currentPage
            });
            onChange && onChange(nextProps.currentPage);
        }
        // 更新总数
        if (nextProps.totalNumber !== this.props.totalNumber) {
            let pageCount = Math.ceil(nextProps.totalNumber / nextProps.pageSize);
            // 重新更新了总数，判断页码是否在总页码范围内，如果不在则重置当前页码为1
            if (this.state.currentPage > pageCount) {
                this.setState({
                    pageCount: pageCount,
                    currentPage: 1
                });
                onChange && onChange(1);
            } else {
                this.setState({
                    pageCount: pageCount
                });
                onChange && onChange(this.props.currentPage);
            }
        }
    }
    // 页码
    renderPages() {
        const { showPrev, showNext, pagesPage, showPages } = this.props;
        const { currentPage, pageCount } = this.state;
        let _className;
        let ret = [];

        if (showPrev) {
            _className = classnames('ms-pagination-prevPage');
            if (currentPage === 1) {
                _className = classnames('ms-pagination-disabled', _className);
            }
            ret.push(<li onClick={this.handlePrevPage} className={_className} key="ms-pagination-prevPage">
                <span role="img" aria-label="left" className="anticon anticon-left"><svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></span>
            </li>);
        }
        if (pagesPage && showPages) {
            ret = ret.concat(this.caclePages());
        }
        if (showNext) {
            _className = classnames('ms-pagination-nextPage');
            if (currentPage === pageCount) {
                _className = classnames('ms-pagination-disabled');
            }
            ret.push(<li onClick={this.handleNextPage} className={_className} key="ms-pagination-nextPage">
                <span role="img" aria-label="right" className="anticon anticon-right"><svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg></span>
            </li>);
        }
        return ret;
    }
    // 页码点击跳转
    handlePageClick = (idx: any) => {
        if (idx === this.state.currentPage) {
            return;
        }
        this.jumpPage(idx);
    }
    // 上一页
    handlePrevPage = () => {
        // console.log(1);

        const { currentPage } = this.state;
        if (currentPage > 1) {
            this.jumpPage(currentPage - 1);
        }
    }
    // 下一页
    handleNextPage = () => {
        const { currentPage, pageCount } = this.state;
        if (currentPage < pageCount) {
            this.jumpPage(currentPage + 1);
        }
    }
    // 跳转到某一页
    handleGo = () => {
        const { currentPage, pageCount } = this.state;
        let inputPage: any = this.refs.msPaginationGoInput && (this.refs.msPaginationGoInput as HTMLInputElement).value;

        // 输入页码必须为数字
        if (!/^(\d)+$/.test(inputPage)) {
            return;
        }
        inputPage = parseInt(inputPage);
        if (inputPage < 1 && pageCount > 1) {
            return;
        }
        if (inputPage > pageCount) {
            return;
        }
        if (inputPage === this.state.currentPage) {
            return;
        }
        this.jumpPage(inputPage);
    }
    jumpPage(idx: any) {
        const { onChange } = this.props;
        onChange && onChange(idx);
        this.setState({
            currentPage: idx
        });
    }
    // 计算页码，返回页码元素
    caclePages() {
        const { totalNumber, pageSize, middlePage } = this.props;
        const { currentPage, pageCount } = this.state;
        let fixPage = 0;										// 根据middlePage修正页码
        let viewPageStart = 0;									// 中间页码开始
        let viewPageEnd = 0;									// 中间页码结束
        let ret = [];

        // 中间页码修正，middlePage为偶数，viewPageEnd需要减1
        fixPage = middlePage % 2 == 0 ? 1 : 0;

        if (currentPage <= middlePage) {
            // 检测前边界值
            viewPageStart = 1;
            viewPageEnd = middlePage + Math.floor(middlePage / 2);
            console.log(viewPageEnd);

        } else if (currentPage >= pageCount - Math.floor(middlePage / 2) - 1) {	// -1 是为了最后一页显示6条分页数据 32..33 是不合理的 应该是 32 33
            // 检测后边界值
            viewPageStart = pageCount - middlePage;
            viewPageEnd = pageCount;
        } else {
            // middlePage在中间
            viewPageStart = currentPage - Math.floor(middlePage / 2);
            viewPageEnd = currentPage + Math.floor(middlePage / 2) - fixPage;
        }

        // 检测是否显示第一页和第一页后面的省略号
        if (viewPageStart > 2) {
            ret.push(<li key={'pagination-first'} onClick={this.handlePageClick.bind(this, 1)}>1</li>);
            ret.push(<li key={'pagination-firt-dot'} className="ms-pagination-dot">...</li>);
        }
        //console.log('currentPage -> ', currentPage, ', pm -> ', pageCount - Math.floor(middlePage / 2));
        //console.log('viewPageStart -> ', viewPageStart, ', viewPageEnd -> ', viewPageEnd);

        range(viewPageStart, viewPageEnd + 1).map((index, key) => {
            let _className = '';
            if (index == currentPage) {
                _className = 'ms-pagination-current';
            }
            ret.push(<li onClick={this.handlePageClick.bind(this, index)} key={'pagination-' + key} className={_className}>{index}</li>);
        });

        if (viewPageEnd != pageCount) {
            ret.push(<li key={'pagination-last'} className="ms-pagination-dot">...</li>);
            ret.push(<li key={'pagination-last-dot'} onClick={this.handlePageClick.bind(this, pageCount)}>{pageCount}</li>);
        }
        return ret;
    }
    renderGo() {

    }
    render() {
        const { showGo } = this.props;

        return (
            <div className="ms-pagination">
                <div className="ms-pagination-pages">
                    <ul>
                        {this.renderPages()}
                    </ul>
                </div>
                <div className='concis-select' style={{ color: '#325DFF' }}>
                    <div className="selected ">
                        <div className="placeholder"></div>
                        <span role="img" aria-label="down" tabIndex={-1} className="anticon anticon-down" style={{ fontSize: 12 + 'px' }}><svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></div>
                </div>
                {
                    showGo
                        ? (
                            <div className="ms-pagination-go-wrap">
                                <div className="ms-pagination-go">
                                    跳转到&nbsp;<input ref="msPaginationGoInput" />&nbsp;页
                                </div>
                                <div className="ms-paginatioin-btn">
                                    <button onClick={this.handleGo}>确定</button>
                                </div>
                            </div>
                        )
                        : null
                }
            </div>
        );
    }
}

export default Pagination;