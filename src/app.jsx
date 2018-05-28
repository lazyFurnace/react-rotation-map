import React from 'react';
import PropTypes from 'prop-types';

import ChoiceNav from './choiceNav';
import MovementArrows from './movementArrows';
import PictureRotation from './pictureRotation';

import './app.less';

function RotationMap({ children }) {
    return (
        <div>
            <ChoiceNav />
            <PictureRotation>
                { children }
            </PictureRotation>
            <MovementArrows />
        </div>
    );
}

RotationMap.defaultProps = {
    children: '你好！ 世界！'
};

RotationMap.propTypes = {
    children: PropTypes.node
};

export default function App() {
    return (
        <RotationMap>
            {
                [
                    <div>你好! React!</div>,
                    <div>你好! VUE!</div>,
                    <div>你好! NG!</div>,
                    <div>你好! 组件!</div>
                ]
            }
        </RotationMap>
    );
}
