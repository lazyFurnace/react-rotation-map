/**
 * 轮播图插件的父组件
 * @param {Node} children 需要轮播的内容
 * @param {Function} beforeChange 切换动画之前的回调函数
 * @param {Function} afterChange 切换动画之后的回调函数
 * @param {Boolean} autoplay 是否自动轮播
 * @param {Number} timeout 轮播的时间差
 * @param {Boolean} dots 是否显示指示条及切换按钮
 * @param {String} easing 动画切换效果
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
            timeout: props.timeout,
            iconLeft: false,
            iconRight: false
        };
    }
    static getDerivedStateFromProps(nextProps) {
        return {
            autoplay: nextProps.autoplay,
            timeout: nextProps.timeout
        };
    }
    componentDidMount() {
        this.beginAutoPlay();
    }
    componentDidUpdate(prevProps) {
        const { autoplay, timeout } = this.props;
        /**
         * autoplay 为 true 的情况下比较 timeout 前后值 ，如果不一致关闭定时器重新打开
         * autoplay 的前后值不同且 autoplay 为 true 的情况下开启定时器
         * autoplay 的前后值不同且 autoplay 为 false 的情况下关闭定时器
         */
        if (autoplay && timeout !== prevProps.timeout) {
            this.stopAutoPlay();
            this.beginAutoPlay();
        } else if (autoplay !== prevProps.autoplay && autoplay) {
            this.beginAutoPlay();
        } else if (autoplay !== prevProps.autoplay && !autoplay) {
            this.stopAutoPlay();
        }
    }
    componentWillUnmount() {
        this.stopAutoPlay();
    }

    // 鼠标移出轮播图范围时开启定时器
    onMouseLeave = () => {
        this.beginAutoPlay();
    }
    // 鼠标移入轮播图范围时关闭定时器
    onMouseEnter = () => {
        this.stopAutoPlay();
    }
    // 触摸滑动事件
    onTouchMove = (e) => {
        // 判断默认行为是否可以被禁用
        if (e.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }
        // 滑动方向的箭头显示
        const [touch] = e.nativeEvent.targetTouches;
        const { pageX } = touch;
        if (this.touchStart || this.touchStart === 0) {
            let iconLeft = false;
            let iconRight = false;
            if (pageX - 10 > this.touchStart) {
                iconLeft = true;
            } else if (pageX + 10 < this.touchStart) {
                iconRight = true;
            }
            this.setState({
                iconLeft,
                iconRight
            });
        }
    }
    // 触摸开始时记录当前坐标
    onTouchStart = (e) => {
        this.stopAutoPlay();
        this.touchStart = e.nativeEvent.targetTouches[0].pageX;
    }
    // 触摸结束时触发对应切换事件
    onTouchEnd = () => {
        this.beginAutoPlay();
        this.touchStart = null;
        const { iconLeft, iconRight } = this.state;
        if (iconLeft) {
            this.goMove('down');
        } else if (iconRight) {
            this.goMove('up');
        }
        this.setState({
            iconLeft: false,
            iconRight: false
        });
    }
    beginAutoPlay = () => {
        const { autoplay, timeout } = this.state;
        // autoplay 开启和 timeout 正确的情况下开启自动轮播定时器
        if (this.clearInterval === undefined && autoplay && timeout) {
            this.clearInterval = setInterval(() => this.goMove('up'), timeout);
        }
    }
    stopAutoPlay = () => {
        if (this.clearInterval) {
            clearInterval(this.clearInterval);
            this.clearInterval = undefined;
        }
    }

    /**
     * 抽象的轮播控制，调用这个函数来真正的修改 state 触发轮播图变化
     * @param {Number} index 轮播图内容的序号
     * @param {String} direction 轮播图切换的方向
     */
    changeState = (index, direction) => {
        // 调用 beforeChange 回调函数函数( beforeChange 为暴露使用的方法)
        this.props.beforeChange(this.state.index, index);
        this.setState({ index, direction });
    }
    /**
     * 控制轮播图左右切换的函数
     * @param {String} type
     * type 值只有两个 'up' 和 'down' 代表着向前和向后
     */
    goMove = (type) => {
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
    /**
     * 控制轮播图随意切换的函数
     * @param {Number} val 在正常范围内的数字，切换至序号所对应的内容
     */
    goTo = (val) => {
        const { children } = this.props;
        const { index } = this.state;
        const len = children.length;
        if (index === val) return;
        if (typeof val === 'number' && val >= 0 && val < len) {
            this.changeState(val, index < val ? 'left' : 'right');
        }
    }
    render() {
        const {
            index,
            direction,
            iconLeft,
            iconRight
        } = this.state;
        const {
            children,
            afterChange,
            dots,
            easing
        } = this.props;
        const ChoiceNavProps = {
            goTo: this.goTo,
            num: children.length,
            index
        };
        return (
            <div
                onTouchStart={this.onTouchStart}
                onTouchEnd={this.onTouchEnd}
                onTouchMove={this.onTouchMove}
                onMouseLeave={this.onMouseLeave}
                onMouseEnter={this.onMouseEnter}
                className="react-rotation-map"
            >
                {
                    dots && (
                        <React.Fragment>
                            <ChoiceNav {...ChoiceNavProps} />
                            <MovementArrows
                                iconLeft={iconLeft}
                                iconRight={iconRight}
                                goMove={this.goMove}
                            />
                        </React.Fragment>
                    )
                }
                <PictureRotation
                    afterChange={afterChange}
                    direction={direction}
                    index={index}
                    easing={easing}
                >
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
    dots: true,
    easing: 'linear'
};

RotationMap.propTypes = {
    children: PropTypes.node,
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func,
    autoplay: PropTypes.bool,
    timeout: PropTypes.number,
    dots: PropTypes.bool,
    easing: PropTypes.string
};
