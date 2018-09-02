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
            index: 0
        };
    }
    arrowChangeState = (type) => {
        if (type === 'up' && this.state.index < this.props.children.length - 1) {
            this.setState({
                index: this.state.index + 1
            });
        } else if (type === 'up' && this.state.index === this.props.children.length - 1) {
            this.setState({
                index: 0
            });
        } else if (type === 'down' && this.state.index > 0) {
            this.setState({
                index: this.state.index - 1
            });
        } else if (type === 'down' && this.state.index === 0) {
            this.setState({
                index: this.props.children.length - 1
            });
        }
    }
    choiceChangeState = (val) => {
        if (!val && val !== 0) return;
        if (Object.prototype.toString.call(val) === '[object Number]') {
            if (val >= 0 && val < this.props.children.length) {
                this.setState({
                    index: val
                });
            }
        }
    }
    render() {
        const ChoiceNavProps = {
            choiceChangeState: this.choiceChangeState,
            num: this.props.children.length,
            index: this.state.index
        };
        return (
            <div className="root">
                <ChoiceNav {...ChoiceNavProps} />
                <PictureRotation index={this.state.index}>
                    { this.props.children }
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
