# Demo

---

## Normal usage

<style>
ul#wrap, ul#wrap>li{
  list-style:none;
  margin: 10px 0;
  padding: 0
}
</style>

<ul id="wrap"></ul>

````javascript
seajs.use(['jquery', 'index', 'index.css'], function($, RoundPercent) {
    var elem = $("#wrap")
    var i = 0;
    for(var i = 0; i < 101; i+=5) {
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
