<h1 align="center">React Rotation Map</h1>

<div align="center">一款简单易用的 React 轮播图组件。</div>

## 支持环境

* 现代浏览器
* React 版本大于 16.3

## 安装

```bash
npm install react-rotation-map --save
```
or
```bash
yarn add react-rotation-map
```

## 示例

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import Rotation from 'react-rotation-map';

const App = () => (
    <div style={{ height: '400px', width: '400px' }}>
        <Rotation>
            <div>React</div>
            <div>Vue</div>
            <div>Angular</div>
        </Rotation>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
```

## 本地开发

```bash
// 安装依赖
npm install
yarn

// 启动项目 - 项目会以本机 ip 启动
npm run dev
yarn dev

// 项目构建
npm run build
yarn build

// 构建 package
npm run build:lib
yarn build:lib
```
