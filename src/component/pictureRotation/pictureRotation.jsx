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
    onEnter = (node) => {
        this.props.afterChange(window.parseInt(node.dataset.index));
    }
    render() {
        const { children, index, direction } = this.props;
        return (
            <div className="picture-rotation">
                {
                    React.Children.map(children, (item, key) => (
                        <Transition onEnter={this.onEnter} in={index === key} timeout={300}>
                            {
                                (state) => {
                                    let className;
                                    if (state === 'entered') {
                                        className = 'rotation-center';
                                    } else if (state === 'exited') {
                                        className = 'rotation-exit';
                                    } else if (state === 'exiting') {
                                        className = direction === 'left' ? 'rotation-center-to-left' : 'rotation-center-to-right';
                                    } else if (state === 'entering') {
                                        className = direction === 'left' ? 'rotation-right-to-center' : 'rotation-left-to-center';
                                    }
                                    return (
                                        <div data-index={key} className={`rotation-item ${className}`}>
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
    afterChange: PropTypes.func
};

export default PictureRotation;
