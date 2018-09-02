import React from 'react';
import PropTypes from 'prop-types';

import './movementArrows.less';

function MovementArrows(props) {
    return (
        <div className="MovementArrows">
            <button
                className="arrow arrow-left"
                onClick={() => props.arrowChangeState('down')}
            />
            <button
                className="arrow arrow-right"
                onClick={() => props.arrowChangeState('up')}
            />
        </div>
    );
}

MovementArrows.propTypes = {
    arrowChangeState: PropTypes.func.isRequired
};

export default MovementArrows;
