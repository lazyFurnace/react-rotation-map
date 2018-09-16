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
                    onClick={() => this.props.arrowChangeState('down')}
                />
                <button
                    className={`iconfont icon-arrow-right ${iconRight ? 'active' : ''}`}
                    onClick={() => this.props.arrowChangeState('up')}
                />
            </div>
        );
    }
}

MovementArrows.propTypes = {
    arrowChangeState: PropTypes.func.isRequired,
    iconLeft: PropTypes.bool,
    iconRight: PropTypes.bool
};

MovementArrows.defaultProps = {
    iconLeft: false,
    iconRight: true
};

export default MovementArrows;
