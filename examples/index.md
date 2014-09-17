# Demo

---

## Normal usage

<style>
ul.columns, ul.columns>li{
  list-style:none;
  margin: 0;
  padding:0
}
ul.columns>li{
  padding: 10px;
  float: left;
}
ul.columns:after{
  content:"\0020"; display:block; height:0; clear:both;
}
</style>

````html
<ul class="columns">
  <li>
    <div id="percent0">0%</div>
  </li>
  <li>
    <div id="percent10">0%</div>
  </li>
  <li>
    <div id="percent25">0%</div>
  </li>
  <li>
    <div id="percent40">0%</div>
  </li>
  <li>
    <div id="percent50">0%</div>
  </li>
  <li>
    <div id="percent60">0%</div>
  </li>
  <li>
    <div id="percent75">0%</div>
  </li>
  <li>
    <div id="percent90">0%</div>
  </li>
  <li>
    <div id="percent100">0%</div>
  </li>
</ul>
````

````javascript
seajs.use(['index', 'index.css'], function(RoundPercent) {

  new RoundPercent("#percent0", "0%", 50).render();
  new RoundPercent("#percent10", "10%", 60).render();
  new RoundPercent("#percent25", "25%", 75).render();
  new RoundPercent("#percent40", "40%", 80).render();
  new RoundPercent("#percent50", "50%", 90).render();
  new RoundPercent("#percent60", "60%", 100).render();
  new RoundPercent("#percent75", "75%", 150).render();
  new RoundPercent("#percent90", "90%", 175).render();
  new RoundPercent("#percent100", "100%", 200).render();

});
````
