# Demo

---

## Normal usage

<style>
ul#wrap, ul#wrap>li{
  list-style:none;
  margin: 10px;
  padding: 0;
  float: left;
}
</style>

<div id="big-demo"></div>
<ul id="wrap"></ul>

````html
<style>
#big-demo {
  font-size:60px;
  line-height:160px;
  color:#f60
}
</style>
````

````javascript
seajs.use(['zepto', 'index', 'index.css'], function($, RoundPercent) {

    new RoundPercent({
      element: "#big-demo",
      percent: "80%",
      width: 160,
      border: 5,
      fill: 'text'
    }).render();

    var elem = $("#wrap")
    for(var i = 0; i <= 100; i+=5) {
      elem.append('<li><div id="loading'+i+'"></div></li>');

      new RoundPercent({
        element: "#loading"+i,
        percent: i+"%",
        width: 80,
        border: 2
      }).render();
    }
});
````
