# react-rotation-map

## React 轮播图组件

### 使用方法

`npm install` 安装 <br>
`npm run start` 启动项目, 打开 `http://localhost:8018/` 访问 <br>
`npm run build` 打包 <br>
`npm run build-build-assembly` 打 npm 包 <br>

### 相关属性

参数|说明|类型|默认
:--:|:--:|:--:|:--:
`beforeChange`|切换动画之前的回调函数|`function(from, to)`|无
`afterChange`|切换动画之后的回调函数|`function(current)`|无
`autoplay`|是否自动切换|`boolean`|`false`
`timeout`|切换间隔时长|`number`|`3000`
`dots`|是否显示指示条及切换按钮|`boolean`|`true`
`easing`|动画切换效果|`string`|`linear`

### 通过 ref 操作属性

#### 使用方法

使用 `React.createRef()` 创建 `ref`

```
constructor(props) {
    ...
    this.rotation = React.createRef();
    ...
}
```

将创建的 `rotation` 放入组件中 

```
<RotationMap ref={this.rotation}>
    ...
<RotationMap/>
```

#### 参数

使用 `this.rotation.current` 获取组件 <br>
可使用方法共两个 `goTo` 和 `goMove` <br>

- `goTo(slideNumber)`：切换到指定内容，`slideNumber` 为 `number` 类型 
- `goMove(type)`：向前/后切换，参数只能是 `up` 、 `down`

### Demo

```
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
`this.rotation.current.goMove(up)`