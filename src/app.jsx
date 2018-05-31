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

const pictureStyle = {
    height: '400px',
    width: '300px'
};

export default function App() {
    return (
        <RotationMap pictureStyle={pictureStyle}>
            {
                [
                    <div key="React" className="Rmap React">你好! React!</div>,
                    <div key="Vue" className="Rmap Vue">你好! Vue!</div>,
                    <div key="Ng" className="Rmap Ng">你好! NG!</div>,
                    <div key="Component" className="Rmap Component">你好! 组件!</div>
                ]
            }
        </RotationMap>
    );
}
