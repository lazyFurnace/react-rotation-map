# react-rotation-map

## React 轮播图插件

### 使用方法

```
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
```

### API(API功能尚未实现)

参数|说明|类型|默认
:--:|:--:|:--:|:--:
`beforeChange`|切换动画之前的回调函数|`function(from, to)`|无
`afterChange`|切换动画之后的回调函数|`function(current)`|无
`autoplay`|是否自动切换|`boolean`|`false`
`dots`|是否显示下方指示条|`boolean`|`true`
`easing`|动画切换效果|`string`|`linear`
`effect`|动画效果的形式(scroll/fade)|`string`|`scroll`
`currentIndex`|当前选中项|`number`|无
