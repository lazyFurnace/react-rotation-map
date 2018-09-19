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

function PictureRotation(props) {
    const { children, index, direction } = props;
    return (
        <div className="picture-rotation">
            {
                React.Children.map(children, (item, key) => (
                    <Transition in={index === key} timeout={300}>
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
                                    <div className={`rotation-item ${className}`}>
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

PictureRotation.defaultProps = {
    children: '',
    direction: 'left'
};

PictureRotation.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    direction: PropTypes.string
};

export default PictureRotation;
