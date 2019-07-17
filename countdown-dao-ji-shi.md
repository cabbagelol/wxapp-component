# countdown-倒计时

倒计时控件

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-countdown": "component/_countdown/countdown"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| day | Boolean | true | 日 | 0.0.6 |
| month | Boolean | true | 月 | 0.0.6 |
| fullyear | Boolean | true | 年 | 0.0.6 |
| hours | Boolean | true | 时 | 0.0.6 |
| minutes | Boolean | true | 分 | 0.0.6 |
| seconds | Boolean | true | 秒 | 0.0.6 |
| milliseconds | Boolean | true | 毫秒 | 0.0.6 |
| end | String | "" | 结束时间，是字符串非new Date类型 | 0.0.6 |
| value | String | new Date\(\) | 当前时间，是字符串非new Date类型 | 0.0.6 |
| placeholder | String | "已结束" | 当过期时显示的内容 | 0.0.6 |

### 插槽

### 使用

```html
<el-countdown slot='content' day='{{time.day}}' month='{{time.month}}' fullyear='{{time.fullyear}}' hours='{{time.hours}}' minutes='{{time.minutes}}' seconds='{{time.seconds}}' milliseconds='{{time.milliseconds}}' end='{{"2030-07-14"}}' interval='-'>

</el-countdown>
```


