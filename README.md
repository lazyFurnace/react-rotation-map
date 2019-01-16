> <a href="https://www.jianshu.com/u/1f5ac0cf6a8b" target="_blank">详细实例</a>

## 特性

- 支持移动端事件
- 可通过函数方法操作轮播
- 提供轮播执行动画前后的回调函数

## 相关属性

参数|说明|类型|默认
:--:|:--:|:--:|:--:
`dots`|切换指示条显示|`boolean`|`true`
`autoplay`|是否自动轮播|`boolean`|`false`
`timeout`|自动轮播间隔时长|`number`|`3000`
`easing`|动画速度效果|`string`|`linear`
`effect`|动画切换效果|`string`|`scroll`
`beforeChange`|切换动画之前的回调函数|`function(from, to)`|`-`
`afterChange`|切换动画之后的回调函数|`function(current)`|`-`

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
