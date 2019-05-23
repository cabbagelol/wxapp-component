# message-全局消息

消息容器

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-message": "component/_message/message"
    }
}
```

### 插槽

默认卡槽:

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| - | 默认插槽在cont的前面 | 0.0.3 |

### 事件

`onMessage`:function \(data\) {} 需在onload中注册this.selectComponent\(""\)来获取message内部事件。\| 0.0.3

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | "" | 标题 | 0.0.4 |
| icon | Boolean | true | 图标 | 0.0.3 |
| type | String | "" | 类型 | 0.0.3 |
| cont | String | "" | 内容 | 0.0.3 |
| time | Number | 3000 | 显示时间 | 0.0.3 |
| mask | Boolean | true | 遮盖，当全局消息执行状态中，无法点击页面其他元素 | 0.0.4 |
| succeed | event | function | 当显示成功时触发该事件。 | 0.0.3 |

* 不要讲succeed的回调视为全局消息成功唯一结果，succeed仅表示onMessage调用成功，非message，因由bindsucceed和bindcancel作为最终结果。

##### type的合法值：

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
| success | 成功 | 0.0.6 |
| warning | 警告 | 0.0.6 |
| danger | 严重 | 0.0.6 |
| - | 默认 | 0.0.6 |

`bindsucceed`: function \(\) {} 成功结果 \| 0.0.6

`bindcancel`: function \(\) {} 用户主动上滑取消触发 \| 0.0.6

### 使用

```html
<el-message class='messgae' icon='{{false}}'>
    <el-tag>消息</el-tag>
</el-message>
```

```js
Page({
    onLoad () {
        this.messgae = this.selectComponent(".messgae");
    },

    onMessageShow () {
      var that = this;
      that.messgae.onMessage({
        cont: that.data.message.cont + new Date().getTime(),
        time: that.data.message.time,
        succeed () {
          wx.showToast({
            title: '成功',
            icon: 'none'
          })
        }
      })
    }
})
```


