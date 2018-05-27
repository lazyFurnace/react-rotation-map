import React from 'react';

import ChoiceNav from './choiceNav';
import MovementArrows from './movementArrows';
import PictureRotation from './pictureRotation';

import './app.less';

export default function App() {
    return (
        <div>
            <ChoiceNav />
            <PictureRotation data="111" />
            <MovementArrows />
        </div>
    );
}
