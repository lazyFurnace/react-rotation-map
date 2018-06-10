import React from 'react';
import PropTypes from 'prop-types';

import Style from './choiceNav.less';

class ChoiceNav extends React.Component {
    getLength = (num) => {
        const navArr = new Array(num);
        return navArr.fill('').map((item, index) => index);
    }
    navClick = (e) => {
        this.props.choiceChangeState(window.parseInt(e.target.dataset.key));
    }
    render() {
        const { num, index } = this.props;
        return (
            <div className={Style.ChoiceNav}>
                {
                    this.getLength(num).map((item, key) => (
                        <button
                            onClick={this.navClick}
                            data-key={key}
                            className={`${key === index ? Style.selNav : ''}`}
                            key={`${item}`}
                        />
                    ))
                }
            </div>
        );
    }
}

ChoiceNav.propTypes = {
    choiceChangeState: PropTypes.func.isRequired,
    num: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
};

export default ChoiceNav;
