/**
 * 轮播图下方的指示按钮，接收三个 prop
 * @param {Function} goTo 切换轮播图的回调函数，处理点击事件
 * @param {Number} num 所需轮播内容的总数
 * @param {Number} index 当前显示内容的编号
 */
import React from 'react';
import PropTypes from 'prop-types';

import './choiceNav.less';

class ChoiceNav extends React.Component {
    /**
     * @param {Number} num 所需轮播内容的总数
     * @return {Array} 返回生成的数组
     * 通过 Array.fill 和 Array.map 方法生成一个有 num 项的数组
     */
    createArray = (num) => {
        const navArray = new Array(num);
        return navArray.fill('').map((item, index) => item + index);
    }
    // 指示按钮的点击事件将所点击按钮的序号传递给父组件
    navClick = (e) => {
        this.props.goTo(window.parseInt(e.target.dataset.key));
    }
    render() {
        const { num, index } = this.props;
        return (
            <div className="choice-nav">
                {
                    this.createArray(num).map((item, key) => (
                        <button
                            onClick={this.navClick}
                            data-key={key}
                            className={`choice-nav-btn ${key === index ? 'sel-nav' : ''}`}
                            key={`${item}`}
                        />
                    ))
                }
            </div>
        );
    }
}

ChoiceNav.propTypes = {
    goTo: PropTypes.func.isRequired,
    num: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
};

export default ChoiceNav;
