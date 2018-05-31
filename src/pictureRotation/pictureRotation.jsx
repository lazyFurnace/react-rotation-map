import React from 'react';
import PropTypes from 'prop-types';

import Style from './pictureRotation.less';

class PictureRotation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowIndex: 0,
            lastIndex: null
        };
        this.getClassName = this.getClassName.bind(this);
    }
    getClassName(index) {
        if (index === this.state.nowIndex) {
            return 'rotation_center';
        }
        if (index === this.state.lastIndex) {
            return 'rotation_left_up';
        }
        return '';
    }
    render() {
        const { pictureStyle, children } = this.props;
        return (
            <div style={pictureStyle} className={Style.pictureRotation}>
                {
                    React.Children.map(children, (item, index) => (
                        <div className={`rotation_item ${this.getClassName(index)}`}>
                            {item}
                        </div>
                    ))
                }
            </div>
        );
    }
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
