/**
 * 轮播图下侧的指示按钮
 * @param {Function} goTo 回调函数处理点击事件
 * @param {Number} num 一共多少个
 * @param {Number} index 当前是哪个
 */
import React from 'react';
import PropTypes from 'prop-types';

import './choiceNav.less';

class ChoiceNav extends React.Component {
    createArray = (num) => {
        const navArray = new Array(num);
        return navArray.fill('').map((item, index) => item + index);
    }
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
