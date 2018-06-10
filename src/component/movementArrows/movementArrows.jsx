import React from 'react';
import PropTypes from 'prop-types';

import Style from './movementArrows.less';

function MovementArrows(props) {
    return (
        <div className={Style.MovementArrows}>
            <button
                className={`${Style.arrow} ${Style['arrow-left']}`}
                onClick={() => props.arrowChangeState('down')}
            />
            <button
                className={`${Style.arrow} ${Style['arrow-right']}`}
                onClick={() => props.arrowChangeState('up')}
            />
        </div>
    );
}

MovementArrows.propTypes = {
    arrowChangeState: PropTypes.func.isRequired
};

export default MovementArrows;
