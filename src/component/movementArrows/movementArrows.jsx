/**
 * 左右翻页键
 * @param {Function} arrowChangeState 左右切换的回调函数
 * @param {Boolean} iconLeft 控制左翻页显示
 * @param {Boolean} iconRight 控制右翻页显示
 */
import React from 'react';
import PropTypes from 'prop-types';

import '../../iconfont/iconfont.css';
import './movementArrows.less';

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
