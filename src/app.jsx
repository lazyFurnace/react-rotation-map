import React from 'react';
import PropTypes from 'prop-types';

import ChoiceNav from './choiceNav';
import MovementArrows from './movementArrows';
import PictureRotation from './pictureRotation';

import Style from './app.less';

function RotationMap({ children }) {
    return (
        <div className={Style.root}>
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
                    <div className="React">你好! React!</div>,
                    <div className="Vue">你好! Vue!</div>,
                    <div className="Ng">你好! NG!</div>,
                    <div className="Component">你好! 组件!</div>
                ]
            }
        </RotationMap>
    );
}
