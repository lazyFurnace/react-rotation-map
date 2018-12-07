import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

import './pictureRotation.less';

/**
 * PictureRotation component - 轮播内容组件
 * @class PictureRotation
 * @classdesc 轮播图轮播内容区域组件
 * @extends React.Component<PictureRotation.props>
 * @property {PictureRotation.props} props
 */

/**
 * @typedef {Object} PictureRotation.props
 * @property {node} children - 需要轮播的内容，使用该组件时传入
 * @property {function} afterChange - 轮播动画结束后的回调函数
 * @property {number} index - 当前显示内容的编号
 * @property {string} direction - 需要切换轮播的方向
 * @property {string} easing - 控制轮播图的动画切换效果
 */

export default class PictureRotation extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        direction: PropTypes.string,
        afterChange: PropTypes.func,
        index: PropTypes.number.isRequired,
        easing: PropTypes.string.isRequired
    };
    static defaultProps = {
        children: '',
        direction: 'left',
        afterChange: () => {}
    };
    // Transition 的方法，用于触发轮播动画结束后的回调函数
    onEntered = (node) => {
        this.props.afterChange(window.parseInt(node.dataset.index));
    }
    render() {
        const {
            children,
            index,
            direction,
            easing
        } = this.props;
        return (
            <div className="picture-rotation">
                {
                    React.Children.map(children, (item, key) => (
                        <Transition onEntered={this.onEntered} in={index === key} timeout={300}>
                            {
                                (state) => {
                                    const className = {
                                        entered: 'rotation-enter',
                                        exited: 'rotation-exit',
                                        entering: direction === 'left' ? 'rotation-right-to-center' : 'rotation-left-to-center',
                                        exiting: direction === 'left' ? 'rotation-center-to-left' : 'rotation-center-to-right'
                                    };
                                    const style = {
                                        animationTimingFunction: easing
                                    };
                                    return (
                                        <div
                                            data-index={key}
                                            style={style}
                                            className={`rotation-item ${className[state]}`}
                                        >
                                            {item}
                                        </div>
                                    );
                                }
                            }
                        </Transition>
                    ))
                }
            </div>
        );
    }
}
