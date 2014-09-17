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
    <div id="percent20">0%</div>
  </li>
  <li>
    <div id="percent25">0%</div>
  </li>
  <li>
    <div id="percent30">0%</div>
  </li>
  <li>
    <div id="percent40">0%</div>
  </li>
  <li>
    <div id="percent45">0%</div>
  </li>
  <li>
    <div id="percent50">0%</div>
  </li>
  <li>
    <div id="percent60">0%</div>
  </li>
  <li>
    <div id="percent70">0%</div>
  </li>
  <li>
    <div id="percent75">0%</div>
  </li>
</ul>
````

````javascript
seajs.use(['index', 'index.css'], function(RoundPercent) {

  new RoundPercent("#percent0", "0%", 100).render();
  new RoundPercent("#percent10", "10%", 100).render();
  new RoundPercent("#percent20", "20%", 100).render();
  new RoundPercent("#percent25", "25%", 100).render();
  new RoundPercent("#percent30", "30%", 100).render();
  new RoundPercent("#percent40", "40%", 100).render();
  new RoundPercent("#percent45", "45%", 100).render();
  new RoundPercent("#percent50", "50%", 100).render();
  new RoundPercent("#percent60", "60%", 100).render();
  new RoundPercent("#percent70", "70%", 100).render();
  new RoundPercent("#percent75", "75%", 100).render();

});
````
