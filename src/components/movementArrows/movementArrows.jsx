import React from 'react';
import PropTypes from 'prop-types';
import '$static/font/iconfont.css';

import './movementArrows.less';

/**
 * MovementArrows component - 切换按键组件
 * @class MovementArrows
 * @classdesc 轮播图左右切换按键组件
 * @extends React.Component<MovementArrows.props,MovementArrows.state>
 * @property {MovementArrows.props} props
 * @property {MovementArrows.state} state
 */

/**
 * @typedef {Object} MovementArrows.props
 * @property {function} goMove - 左右切换的回调函数
 * @property {boolean} iconLeft - 控制左切换显示
 * @property {boolean} iconRight - 控制右切换显示
 */

/**
 * @typedef {Object} MovementArrows.state
 * @property {boolean} iconLeft - 控制左切换显示
 * @property {boolean} iconRight - 控制右切换显示
 */

export default class MovementArrows extends React.Component {
    static propTypes = {
        goMove: PropTypes.func.isRequired,
        iconLeft: PropTypes.bool,
        iconRight: PropTypes.bool
    };
    static defaultProps = {
        iconLeft: false,
        iconRight: false
    };
    constructor(props) {
        super(props);
        this.state = {
            iconLeft: props.iconLeft,
            iconRight: props.iconRight
        };
    }
    static getDerivedStateFromProps(nextProps) {
        return {
            iconLeft: nextProps.iconLeft,
            iconRight: nextProps.iconRight
        };
    }
    render() {
        const { iconLeft, iconRight } = this.state;
        return (
            <div className="movement-arrows">
                <button
                    className={`iconfont icon-arrow-left ${iconLeft ? 'active' : ''}`}
                    onClick={() => this.props.goMove('down')}
                />
                <button
                    className={`iconfont icon-arrow-right ${iconRight ? 'active' : ''}`}
                    onClick={() => this.props.goMove('up')}
                />
            </div>
        );
    }
}
