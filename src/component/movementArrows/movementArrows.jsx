/**
 * 轮播图左右的切换按钮，接收三个 prop
 * @param {Function} goMove 左右切换的回调函数
 * @param {Boolean} iconLeft 控制左切换显示
 * @param {Boolean} iconRight 控制右切换显示
 * iconLeft 和 iconRight 是为了以后手机端触滑动时显示切换按钮所预留的
 */
import React from 'react';
import PropTypes from 'prop-types';

import './movementArrows.less';
import '../../iconfont/iconfont.css';

class MovementArrows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconLeft: props.iconLeft,
            iconRight: props.iconRight
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

MovementArrows.propTypes = {
    goMove: PropTypes.func.isRequired,
    iconLeft: PropTypes.bool,
    iconRight: PropTypes.bool
};

MovementArrows.defaultProps = {
    iconLeft: false,
    iconRight: true
};

export default MovementArrows;
