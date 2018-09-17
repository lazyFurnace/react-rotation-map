import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

import './pictureRotation.less';

function PictureRotation(props) {
    const { children, index, direction } = props;
    console.log(direction);
    return (
        <div className="pictureRotation">
            {
                React.Children.map(children, (item, key) => (
                    <Transition in={index === key} timeout={300}>
                        {
                            (state) => {
                                console.log(`${key}: ${state}`);
                                return (
                                    <div className={`rotation_item ${index === key ? 'rotation_center' : ''}`}>
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
