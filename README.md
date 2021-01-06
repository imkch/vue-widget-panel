# vue-widget-panel

基于vue.js实现内容自适应的部件面板组件。

## 示例

点击[DEMO](https://imkch.github.io/vue-widget-panel/dist/index.html)查看

## 安装使用

### 通过NPM安装，import导入

``` bash
npm install --save vue-widget-panel
```
**全局安装**
``` javascript
import VueWidgetPanel from 'vue-widget-panel';
// 引入样式文件
import 'vue-widget-panel/lib/index.css';

Vue.component('VueWidgetPanel', VueWidgetPanel);
```

**局部安装**
``` javascript
import VueWidgetPanel from 'vue-widget-panel';
// 引入样式文件
import 'vue-widget-panel/lib/index.css';

export default {
  components: {
    VueWidgetPanel
  }
}
```

``` html
<vue-widget-panel title="我是标题" :top="100" :left="100">
  <div class="widget-content">
    Hello，我是内容。
  </div>
</vue-widget-panel>
```

### 通过Script标签引入

``` html
<link href="https://unpkg.com/vue-widget-panel/lib/index.css">
<script src="https://unpkg.com/vue-widget-panel/lib/index.umd.js"></script>
```

``` javascript
new Vue({
  el: '#app',
  components: {
    VueWidgetPanel
  }
})
```

## API

### 属性（props）

| 属性名         | 类型   | 默认 | 描述               |
| -------------- | ------ | ---- | ------------------ |
| title       | String  | "" | 部件标题 |
| top | Number | - | 初始上偏移 |
| left            | Number | - | 初始左偏移      |
| bottom | Number | - | 初始下偏移 |
| right | Number | - | 初始右偏移 |

### 插槽（slot）

| 名称 | 描述     |
| ---- | -------- |
| 无   | 主题内容 |

