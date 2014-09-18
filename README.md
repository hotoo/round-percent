# round-percent [![spm version](http://spmjs.io/badge/round-percent)](http://spmjs.io/package/round-percent)

---

Round Percent Widget

## Install

```
$ spm install round-percent --save
```

## Usage

```js
var roundPercent = require('round-percent');
// use roundPercent
```

## API

### RoundPercent(config)

config 参数各项：

* `Object element`：目标 DOM 渲染位置。可以是以下类型：
  * HTMLElement：例如 `document.getElementById("id")`
  * jQuery：例如 `$("$id")`
  * `Selector`：例如 `"#id"`
* `String percent`：百分比值。例如 `"50%"`
* `Number width`：渲染的尺寸宽度。例如 `100`
* `Number height`：渲染的尺寸高度，可选。例如 `100`
* `Number border`：边框宽度，默认为 2。
* `Boolean fill`：是否自动填充内容，默认为 true。

### .render()

执行渲染。
