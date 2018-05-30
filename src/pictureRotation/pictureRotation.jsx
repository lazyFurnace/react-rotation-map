import React from 'react';
import PropTypes from 'prop-types';

import Style from './pictureRotation.less';

function PictureRotation({ children, pictureStyle }) {
    return (
        <div style={pictureStyle} className={Style.pictureRotation}>
            {
                React.Children(children, item => (
                    <div key={item.className}>
                        {item}
                    </div>
                ))
            }
        </div>
    );
}

PictureRotation.defaultProps = {
    children: '你好！ 世界！',
    pictureStyle: {
        height: '100%',
        width: '100%'
    }
};

PictureRotation.propTypes = {
    children: PropTypes.node,
    pictureStyle: PropTypes.shape({
        height: PropTypes.string,
        width: PropTypes.string
    })
};

export default PictureRotation;
