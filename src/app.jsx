import React from 'react';

import { ChoiceNav } from './choiceNav';
import { MovementArrows } from './movementArrows';
import { pictureRotation } from './pictureRotation';

import './app.less';

export default function App() {
    return (
        <div>
            <ChoiceNav />
            <pictureRotation />
            <MovementArrows />
        </div>
    );
}
