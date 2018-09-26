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
        console.log(this.rotation);
    }
    afterChange = (current) => {
        console.log(`afterChange: ${current}`);
    }
    render() {
        const { carouselData } = this.state;
        return (
            <div className="root">
                <RotationMap
                    ref={this.rotation}
                    autoplay
                    timeout={5000}
                    dots
                    easing="linear"
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
