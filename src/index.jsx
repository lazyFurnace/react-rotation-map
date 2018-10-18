import React from 'react';
import ReactDom from 'react-dom';

import './index.less';

import RotationMap from './component/rotationMap';

if (module.hot) {
    module.hot.accept();
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.rotation = React.createRef();
        this.state = {
            carouselData: [
                'Angular',
                'React',
                'Vue',
                'Webpack',
                'Nodejs'
            ]
        };
    }
    beforeChange = (from, to) => {
        document.getElementById('console').innerText = `beforeChange: ${from} to ${to}`;
    }
    afterChange = (current) => {
        document.getElementById('console').innerText = `afterChange: ${current}`;
    }
    render() {
        const { carouselData } = this.state;
        return (
            <div className="root">
                <RotationMap
                    ref={this.rotation}
                    autoplay
                    timeout={3000}
                    dots
                    easing="linear"
                    beforeChange={this.beforeChange}
                    afterChange={this.afterChange}
                >
                    {
                        carouselData.map(item => (
                            <div key={item} alt={item} className={`react-rotation ${item}`}>
                                <h1>{item}</h1>
                            </div>
                        ))
                    }
                </RotationMap>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));
