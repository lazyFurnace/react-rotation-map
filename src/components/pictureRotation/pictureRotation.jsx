import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
 * @property {string} easing - 控制轮播图的动画速度效果
 * @property {string} effect - 控制轮播图的动画切换效果
 */

export default class PictureRotation extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        direction: PropTypes.string,
        afterChange: PropTypes.func,
        index: PropTypes.number.isRequired,
        easing: PropTypes.string.isRequired,
        effect: PropTypes.string.isRequired
    };
    static defaultProps = {
        children: '',
        direction: 'left',
        afterChange: () => { }
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
            easing,
            effect
        } = this.props;
        const { map } = React.Children;
        return (
            <div className="picture-rotation">
                {map(children, (item, key) => (
                    <Transition
                        onEntered={this.onEntered}
                        in={index === key}
                        timeout={300}
                    >
                        {(state) => {
                            const className = {
                                entered: 'rotation-enter',
                                exited: 'rotation-exit',
                                entering: `rotation-enter-${direction}-${effect}`,
                                exiting: `rotation-exit-${direction}-${effect}`
                            };
                            return (
                                <div
                                    data-index={key}
                                    className={classNames(
                                        'rotation-item',
                                        className[state],
                                        `rotation-${easing}`
                                    )}
                                >
                                    {item}
                                </div>
                            );
                        }}
                    </Transition>
                ))}
            </div>
        );
    }
}
