import React from 'react';
import PropTypes from 'prop-types';

import Style from './pictureRotation.less';

function PictureRotation({ children }) {
    return (
        <div className={Style.pictureRotation}>
            { children }
        </div>
    );
}

PictureRotation.defaultProps = {
    children: '你好！ 世界！'
};

PictureRotation.propTypes = {
    children: PropTypes.node
};

export default PictureRotation;
