<h1 align="center">React Rotation Map</h1>

这是一款基于 React 的轮播图组件，适用于电脑端及移动端。

## 特性

- 可通过 ref 操作轮播显示。
- 提供轮播执行动画前后的回调函数。
- 支持移动端触摸事件。

## 支持环境

* 现在浏览器。
* React v16.3 以上。

## 安装

```bash
npm install react-rotation-map --save
```

## 实例

```jsx
import RotationMap from 'react-rotation-map';
<RotationMap>
    <div className='className'>React</div>
    <div className='className'>Vue</div>
    <div className='className'>Angular</div>
</RotationMap>
```

## 本地开发

`npm install` 安装 <br>
`npm run start` 启动项目, 打开 `http://localhost:8018/` 访问 <br>
`npm run build` 打包 <br>
`npm run build-assembly` 打 npm 包 <br>

## 相关属性

参数|说明|类型|默认
:--:|:--:|:--:|:--:
`beforeChange`|切换动画之前的回调函数|`function(from, to)`|无
`afterChange`|切换动画之后的回调函数|`function(current)`|无
`autoplay`|是否自动切换|`boolean`|`false`
`timeout`|切换间隔时长|`number`|`3000`
`dots`|是否显示指示条及切换按钮|`boolean`|`true`
`easing`|动画切换效果|`string`|`linear`

## ref 操作属性

#### 使用方法

使用 `React.createRef()` 创建 `ref`

```jsx
constructor(props) {
    ...
    this.rotation = React.createRef();
    ...
}
```

将创建的 `rotation` 放入组件中 

```jsx
<RotationMap ref={this.rotation}>
    ...
<RotationMap/>
```

#### 参数

使用 `this.rotation.current` 获取组件 <br>
可使用方法共两个 `goTo` 和 `goMove` <br>

- `goTo(slideNumber)`：切换到指定内容，`slideNumber` 为 `number` 类型 
- `goMove(type)`：向前/后切换，参数只能是 `up` 、 `down`

## 实例

```jsx
<RotationMap
    ref={this.rotation}
    autoplay
    timeout={2000}
    dots
    easing="linear"
    beforeChange={this.beforeChange}
    afterChange={this.afterChange}
>
    ...
</RotationMap>
```

`ref` 操作 <br>

```jsx
this.rotation.current.goMove(up)
```
