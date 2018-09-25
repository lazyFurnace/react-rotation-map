import React from 'react';
import ReactDom from 'react-dom';

import './index.less';

import RotationMap from './component/rotationMap';

if (module.hot) {
    module.hot.accept();
}

function beforeChange(from, to) {
    console.log(`beforeChange: ${from} ${to}`);
}

function afterChange(current) {
    console.log(`afterChange: ${current}`);
}

function App() {
    return (
        <div className="root">
            <RotationMap beforeChange={beforeChange} afterChange={afterChange}>
                <div className="Rmap React">
                    <h1>你好! React!</h1>
                </div>
                <div className="Rmap Vue">
                    <h1>你好! Vue!</h1>
                </div>
                <div className="Rmap Ng">
                    <h1>你好! NG!</h1>
                </div>
                <div className="Rmap Component">
                    <h1>你好! 组件!</h1>
                </div>
            </RotationMap>
        </div>
    );
}

ReactDom.render(<App />, document.getElementById('root'));
