## 特性

- 可通过 ref 操作轮播显示。
- 提供轮播执行动画前后的回调函数。
- 支持移动端触摸事件。

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
<Rotation ref={this.rotation}>
    ...
<Rotation/>
```

#### 参数

使用 `this.rotation.current` 获取组件 <br>
可使用方法共两个 `goTo` 和 `goMove` <br>

- `goTo(slideNumber)`：切换到指定内容，`slideNumber` 为 `number` 类型 
- `goMove(type)`：向前/后切换，参数只能是 `up` 、 `down`

## 实例

```jsx
<Rotation
    ref={this.rotation}
    autoplay
    timeout={2000}
    dots
    easing="linear"
    beforeChange={this.beforeChange}
    afterChange={this.afterChange}
>
    ...
</Rotation>
```

`ref` 操作 <br>

```jsx
this.rotation.current.goMove(up)
```
