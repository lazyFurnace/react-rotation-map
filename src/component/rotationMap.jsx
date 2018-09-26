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
            direction: '',
            autoplay: props.autoplay,
            timeout: props.timeout
        };
    }
    static getDerivedStateFromProps(nextProps) {
        return {
            autoplay: nextProps.autoplay,
            timeout: nextProps.timeout
        };
    }
    componentDidMount() {
        this.startAutoPlay();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.autoplay !== this.props.autoplay) {
            if (this.props.autoplay) {
                this.startAutoPlay();
            } else {
                this.stopAutoPlay();
            }
        }
        if (prevProps.timeout !== this.props.timeout) {
            this.stopAutoPlay();
            this.startAutoPlay();
        }
    }
    componentWillUnmount() {
        this.stopAutoPlay();
    }
    /**
     * 鼠标移入/出时停止/开启自动轮播
     */
    onMouseLeave = () => {
        this.startAutoPlay();
    }
    onMouseEnter = () => {
        this.stopAutoPlay();
    }
    /**
     * 控制是否自动轮播
     */
    startAutoPlay = () => {
        const { autoplay, timeout } = this.state;
        if (this.clearInterval === undefined && autoplay && timeout) {
            this.clearInterval = setInterval(() => this.arrowChangeState('up'), timeout);
        }
    }
    stopAutoPlay = () => {
        if (this.clearInterval) {
            clearInterval(this.clearInterval);
            this.clearInterval = undefined;
        }
    }
    /**
     * 抽象的轮播控制调用的 state
     */
    changeState = (index, direction) => {
        this.props.beforeChange(this.state.index, index);
        this.setState({ index, direction });
    }
    /**
     * 轮播图轮播控制函数
     */
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
        const { children, afterChange, dots } = this.props;
        const ChoiceNavProps = {
            choiceChangeState: this.choiceChangeState,
            num: children.length,
            index
        };
        return (
            <div onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className="react-rotation-map">
                {
                    dots && (
                        <React.Fragment>
                            <ChoiceNav {...ChoiceNavProps} />
                            <MovementArrows arrowChangeState={this.arrowChangeState} />
                        </React.Fragment>
                    )
                }
                <PictureRotation afterChange={afterChange} direction={direction} index={index}>
                    { children }
                </PictureRotation>
            </div>
        );
    }
}

RotationMap.defaultProps = {
    children: '',
    beforeChange: () => {},
    afterChange: () => {},
    autoplay: false,
    timeout: 3000,
    dots: true
};

RotationMap.propTypes = {
    children: PropTypes.node,
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func,
    autoplay: PropTypes.bool,
    timeout: PropTypes.number,
    dots: PropTypes.bool
};
