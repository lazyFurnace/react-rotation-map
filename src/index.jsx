import React from 'react';
import ReactDom from 'react-dom';

import './index.less';

import RotationMap from './component/rotationMap';

if (module.hot) {
    module.hot.accept();
}

function App() {
    return (
        <div className="root">
            <RotationMap>
                <div key="React" className="Rmap React">
                    <h1>你好! React!</h1>
                </div>
                <div key="Vue" className="Rmap Vue">
                    <h1>你好! Vue!</h1>
                </div>
                <div key="Ng" className="Rmap Ng">
                    <h1>你好! NG!</h1>
                </div>
                <div key="Component" className="Rmap Component">
                    <h1>你好! 组件!</h1>
                </div>
            </RotationMap>
        </div>
    );
}

ReactDom.render(<App />, document.getElementById('root'));
