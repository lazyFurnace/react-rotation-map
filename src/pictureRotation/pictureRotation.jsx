import React from 'react';
import PropTypes from 'prop-types';

import './pictureRotation.less';

function PictureRotation(props) {
    return (
        <div className="pictureRotation">将来的轮播图片 {props.data} </div>
    );
}

PictureRotation.defaultProps = {
    data: '55555555'
};

PictureRotation.propTypes = {
    data: PropTypes.string
};

export default PictureRotation;
