import React from 'react';

import Style from './movementArrows.less';

function MovementArrows() {
    return (
        <div className={Style.MovementArrows}>
            <div className={`${Style.arrow} ${Style['arrow-left']}`}>&lt;</div>
            <div className={`${Style.arrow} ${Style['arrow-right']}`}>&gt;</div>
        </div>
    );
}

export default MovementArrows;
