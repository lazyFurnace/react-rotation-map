/**
 * 轮播插件父组件
 * @param {Node} children 需要轮播的内容
 */
import React from 'react';
import PropTypes from 'prop-types';

import ChoiceNav from './choiceNav';
import MovementArrows from './movementArrows';
import PictureRotation from './pictureRotation';

import './rotationMap.less';

export default class RotationMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: ''
        };
    }
    changeState = (index, direction) => {
        this.props.beforeChange(this.state.index, index);
        this.setState({ index, direction });
    }
    arrowChangeState = (type) => {
        const { children } = this.props;
        const { index } = this.state;
        const len = children.length;
        switch (type) {
        case 'up':
            this.changeState(index < len - 1 ? index + 1 : 0, 'left');
            break;
        case 'down':
            this.changeState(index > 0 ? index - 1 : len - 1, 'right');
            break;
        default:
            throw Error('The carousel has an error!');
        }
    }
    choiceChangeState = (val) => {
        const { children } = this.props;
        const { index } = this.state;
        const len = children.length;
        if (index === val) return;
        if (typeof val === 'number' && val >= 0 && val < len) {
            this.changeState(val, index < val ? 'left' : 'right');
        }
    }
    render() {
        const { index, direction } = this.state;
        const { children, afterChange } = this.props;
        const ChoiceNavProps = {
            choiceChangeState: this.choiceChangeState,
            num: children.length,
            index
        };
        return (
            <div className="react-rotation-map">
                <ChoiceNav {...ChoiceNavProps} />
                <PictureRotation afterChange={afterChange} direction={direction} index={index}>
                    { children }
                </PictureRotation>
                <MovementArrows arrowChangeState={this.arrowChangeState} />
            </div>
        );
    }
}

RotationMap.defaultProps = {
    children: '',
    beforeChange: () => {},
    afterChange: () => {}
};

RotationMap.propTypes = {
    children: PropTypes.node,
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func
};
