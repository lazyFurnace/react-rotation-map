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
    arrowChangeState = (type) => {
        const { children } = this.props;
        const { index } = this.state;
        let direction = '';
        switch (type) {
        case 'up':
            direction = 'left';
            if (index < children.length - 1) {
                this.setState({
                    index: index + 1,
                    direction
                });
            } else if (index === children.length - 1) {
                this.setState({
                    index: 0,
                    direction
                });
            }
            break;
        case 'down':
            direction = 'right';
            if (index > 0) {
                this.setState({
                    index: index - 1,
                    direction
                });
            } else if (index === 0) {
                this.setState({
                    index: children.length - 1,
                    direction
                });
            }
            break;
        default:
            throw Error('轮播出现错误！');
        }
    }
    choiceChangeState = (val) => {
        const { index } = this.state;
        if (index === val) return;
        if (Object.prototype.toString.call(val) === '[object Number]') {
            if (val >= 0 && val < this.props.children.length) {
                this.setState({
                    index: val,
                    direction: index < val ? 'left' : 'right'
                });
            }
        }
    }
    render() {
        const { index, direction } = this.state;
        const { children } = this.props;
        const ChoiceNavProps = {
            choiceChangeState: this.choiceChangeState,
            num: children.length,
            index
        };
        return (
            <div className="root">
                <ChoiceNav {...ChoiceNavProps} />
                <PictureRotation direction={direction} index={index}>
                    { children }
                </PictureRotation>
                <MovementArrows arrowChangeState={this.arrowChangeState} />
            </div>
        );
    }
}

RotationMap.defaultProps = {
    children: ''
};

RotationMap.propTypes = {
    children: PropTypes.node
};
