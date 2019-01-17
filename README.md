## 特性

- 支持移动端事件
- 可通过函数方法操作轮播
- 提供轮播执行动画前后的回调函数

## 相关属性

参数|说明|类型|默认
:--:|:--:|:--:|:--:
`dots`|是否显示指示条|`boolean`|`true`
`autoplay`|是否自动轮播|`boolean`|`false`
`timeout`|自动轮播间隔时长|`number`|`3000`
`easing`|动画过渡速度曲线|`string`|`linear`
`effect`|动画切换效果|`string`|`scroll`
`beforeChange`|切换动画之前的回调函数|`function(from, to)`|`-`
`afterChange`|切换动画之后的回调函数|`function(current)`|`-`

<br>

- `easing` 取值有 `linear | ease | ease-in | ease-out | ease-in-out`
- `effect` 取值有 `scroll(滑动) | fade(渐隐) | mix(滑动&渐隐)`

#### <a href="/react-rotation-map/home" target="_blank">详细实例</a>

## 函数操作

### 参数

> 拥有 `goTo` 和 `goMove` 两个方法操作轮播图 <br>

- `goTo(number)`：切换到指定轮播页
- `goMove(type)`：切换上一个/下一个，参数为 `left` 或 `right`

### 方法

使用 `ref` 方法获取 `Rotation` 组件对象，调用其内部方法。

```jsx
class App extends React.Component {
    constructor(props) {
        super(props);
        this.rotation = React.createRef();
    }
    handleClick = () => {
        this.rotation.current.goMove('left');
    }
    render() {
        return (
            <React.Fragment>
                <Rotation ref={this.rotation}>
                    {/* some component */}
                </Rotation>
                <button onClick={this.handleClick}>向左</button>
            </React.Fragment>
        );
    }
}
```

## 完整属性

```jsx
function App({ rotationData, beforeChange, afterChange }) {
    return (
        <Rotation
            ref={this.rotation}
            dots
            autoplay
            timeout={3000}
            easing="linear"
            effect="scroll"
            beforeChange={this.beforeChange}
            afterChange={this.afterChange}
        >
            {rotationData.map(item => <h1 key={item.id}>{item}</h1>)}
        </Rotation>
    )
}
```

#### <a href="https://github.com/liqiUser/react-rotation-map/blob/master/src/index.jsx" target="_blank">完整实例代码</a>
