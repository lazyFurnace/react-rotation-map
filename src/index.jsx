import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import Rotation from '$components/rotation';

import './index.less';

if (module.hot) {
    module.hot.accept();
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.rotation = React.createRef();
        this.state = {
            carousel: ['Angular', 'React', 'Vue', 'Webpack', 'Nodejs'],
            changeText: 'start'
        };
    }
    beforeChange = (from, to) => {
        this.setState({ changeText: `beforeChange: ${from} to ${to}` });
    }
    afterChange = (current) => {
        this.setState({ changeText: `afterChange: ${current}` });
    }
    handleClick = direction => () => {
        const { rotation } = this;
        rotation.current.goMove(direction);
    }
    render() {
        const { carousel, changeText } = this.state;
        return (
            <div>
                <header>
                    <h2>完整实例</h2>
                </header>
                <div className="complete-example">
                    <div className="rotation-content">
                        <Rotation
                            ref={this.rotation}
                            autoplay
                            timeout={3000}
                            dots
                            easing="linear"
                            effect="scroll"
                            beforeChange={this.beforeChange}
                            afterChange={this.afterChange}
                        >
                            {carousel.map(item => (
                                <div key={item} alt={item} className={classNames('react-rotation', item)}>
                                    <h1>{item}</h1>
                                </div>
                            ))}
                        </Rotation>
                    </div>
                    <p className="rotation-text">{changeText}</p>
                    <div className="rotation-button">
                        <button onClick={this.handleClick('left')}>向左</button>
                        <button onClick={this.handleClick('right')}>向右</button>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));
