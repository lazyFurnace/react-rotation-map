import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './choiceNav.less';

/**
 * ChoiceNav component - 指示按钮组件
 * @class ChoiceNav
 * @classdesc 轮播图下方的指示按钮组件
 * @extends React.Component<ChoiceNav.props>
 * @property {ChoiceNav.props} props
 */

/**
 * @typedef {Object} ChoiceNav.props
 * @property {function} goTo - 切换轮播图的回调函数，处理点击事件
 * @property {number} num - 所需轮播内容的总数
 * @property {number} index - 当前显示内容的编号
 */

export default class ChoiceNav extends React.Component {
    static propTypes = {
        goTo: PropTypes.func.isRequired,
        num: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired
    }
    /**
     * @param {Number} num 所需轮播内容的总数
     * @return {Array} 返回生成的数组
     * 通过 Array.fill 和 Array.map 方法生成一个有 num 项的数组
     */
    createArray = (num) => {
        const navArray = [];
        for (let i = 0; i < num; i += 1) {
            navArray[i] = `${i}`;
        }
        return navArray;
    }
    // 指示按钮的点击事件将所点击按钮的序号传递给父组件
    navClick = index => () => {
        this.props.goTo(index);
    }
    render() {
        const { navClick, createArray } = this;
        const { num, index } = this.props;
        return (
            <div className="choice-nav">
                {
                    createArray(num).map((item, key) => (
                        <button
                            key={item}
                            onClick={navClick(key)}
                            className={classNames(
                                'choice-nav-btn',
                                { 'sel-nav': key === index }
                            )}
                        />
                    ))
                }
            </div>
        );
    }
}
