import React from 'react';
import PropTypes from 'prop-types';

import Style from './pictureRotation.less';

function PictureRotation(props) {
    const { children, index } = props;
    return (
        <div className={Style.pictureRotation}>
            {
                React.Children.map(children, (item, key) => (
                    <div className={`rotation_item${index === key ? ' rotation_center' : ''}`}>
                        {item}
                    </div>
                ))
            }
        </div>
    );
}

PictureRotation.defaultProps = {
    children: ''
};

PictureRotation.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired
};

export default PictureRotation;
