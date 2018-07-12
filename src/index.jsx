import React from 'react';
import ReactDom from 'react-dom';

import RotationMap from './component/rotationMap';

if (module.hot) {
    module.hot.accept();
}

function App() {
    return (
        <RotationMap>
            <div key="React" className="Rmap React">
                <h1>你好! 111React!</h1>
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
    );
}

ReactDom.render(<App />, document.getElementById('root'));
