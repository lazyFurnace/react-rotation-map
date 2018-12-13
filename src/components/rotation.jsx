import React from 'react';
import PropTypes from 'prop-types';

import ChoiceNav from './choiceNav';
import MovementArrows from './movementArrows';
import PictureRotation from './pictureRotation';

import './rotation.less';

/**
 * Rotation component - 轮播图组件
 * @class Rotation
 * @classdesc 轮播图组件的外层组件，用于组合整体轮播图
 * @extends React.Component<Rotation.props,Rotation.state>
 * @property {Rotation.props} props
 * @property {Rotation.state} state
 */

/**
 * @typedef {Object} Rotation.props
 * @property {node} children - 传入所需要轮播的内容
 * @property {boolean} autoplay - 是否自动轮播
 * @property {number} timeout - 轮播间隔
 * @property {boolean} dots - 是否显示控件
 * @property {string} easing - 控制轮播图的动画速度效果
 * @property {string} effect - 控制轮播图的动画切换效果
 * @property {function} beforeChange 切换动画之前的回调函数
 * @property {function} afterChange 切换动画之后的回调函数
 */

/**
 * @typedef {Object} Rotation.state
 * @property {number} index - 轮播图轮播位置
 * @property {string} direction - 轮播图轮播方向
 * @property {boolean} autoplay - 是否自动轮播
 * @property {number} timeout - 轮播间隔
 * @property {boolean} iconLeft - 左切换箭头
 * @property {boolean} iconRight - 右切换箭头
 */

export default class Rotation extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        autoplay: PropTypes.bool,
        timeout: PropTypes.number,
        dots: PropTypes.bool,
        easing: PropTypes.string,
        effect: PropTypes.string,
        beforeChange: PropTypes.func,
        afterChange: PropTypes.func
    }
    static defaultProps = {
        children: '',
        autoplay: false,
        timeout: 3000,
        dots: true,
        easing: 'linear',
        effect: 'scroll',
        beforeChange: () => { },
        afterChange: () => { }
    }
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
         * autoplay 为 true 的情况下比较 timeout 前后值，如果不一致关闭自动播放重新打开
         * autoplay 的前后值不同时根据 autoplay 的值开启或关闭自动播放
         */
        if (autoplay && timeout !== prevProps.timeout) {
            this.stopAutoPlay();
            this.beginAutoPlay();
        }
        if (autoplay !== prevProps.autoplay) {
            if (autoplay) {
                this.beginAutoPlay();
            } else {
                this.stopAutoPlay();
            }
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
        // 滑动方向的箭头显示
        const [{ pageX }] = e.nativeEvent.targetTouches;
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
        const [{ pageX }] = e.nativeEvent.targetTouches;
        this.touchStart = pageX;
    }
    // 触摸结束时触发对应切换事件
    onTouchEnd = () => {
        this.beginAutoPlay();
        this.touchStart = null;
        const { iconLeft, iconRight } = this.state;
        if (iconLeft) {
            this.goMove('right');
        } else if (iconRight) {
            this.goMove('left');
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
            this.clearInterval = setInterval(() => this.goMove('left'), timeout);
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
     * type 值只有两个 'left' 和 'right' 代表着向左和向右
     */
    goMove = (type) => {
        const { children } = this.props;
        const { index } = this.state;
        const len = children.length;
        switch (type) {
        case 'left':
            this.changeState(index < len - 1 ? index + 1 : 0, 'left');
            break;
        case 'right':
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
            easing,
            effect
        } = this.props;
        return (
            <div
                className="react-rotation-map"
                onTouchStart={this.onTouchStart}
                onTouchEnd={this.onTouchEnd}
                onTouchMove={this.onTouchMove}
                onMouseLeave={this.onMouseLeave}
                onMouseEnter={this.onMouseEnter}
            >
                {
                    dots ? [
                        <ChoiceNav
                            key="choice-nav"
                            index={index}
                            num={children.length}
                            goTo={this.goTo}
                        />,
                        <MovementArrows
                            key="movement-arrows"
                            iconLeft={iconLeft}
                            iconRight={iconRight}
                            goMove={this.goMove}
                        />
                    ] : null
                }
                <PictureRotation
                    afterChange={afterChange}
                    direction={direction}
                    index={index}
                    easing={easing}
                    effect={effect}
                >
                    {children}
                </PictureRotation>
            </div>
        );
    }
}
