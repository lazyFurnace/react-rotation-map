/**
 * 轮播内容区域
 * @param {Node} children 需要轮播的内容
 * @param {Number} index 当前选中的页码
 * @param {String} direction 需要切换轮播的方向
 */
import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

import './pictureRotation.less';

class PictureRotation extends React.Component {
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

PictureRotation.defaultProps = {
    children: '',
    direction: 'left',
    afterChange: () => {}
};

PictureRotation.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    direction: PropTypes.string,
    afterChange: PropTypes.func,
    easing: PropTypes.string.isRequired
};

export default PictureRotation;
