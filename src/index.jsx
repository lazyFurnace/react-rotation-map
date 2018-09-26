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
        this.state = {
            carouselData: [
                'Chaos-Warrior',
                'Cursed-Legion',
                'Gray-Knight',
                'Space-Wolf',
                'Star-Warrior',
                'Ultimate-Warrior'
            ]
        };
    }
    beforeChange = (from, to) => {
        console.log(`beforeChange: ${from} ${to}`);
    }
    afterChange = (current) => {
        console.log(`afterChange: ${current}`);
    }
    render() {
        const { carouselData } = this.state;
        return (
            <div className="root">
                <RotationMap
                    autoplay
                    timeout={5000}
                    beforeChange={this.beforeChange}
                    afterChange={this.afterChange}
                >
                    {
                        carouselData.map(item => <div key={item} alt={item} className={`react-rotation ${item}`} />)
                    }
                </RotationMap>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));
