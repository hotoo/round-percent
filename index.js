
var $ = require("jquery");

var offsetDeg = 45; // start from top(12 o'clock)

// @param {String} percent like `5%`
// @return {Number} like `0.05`
function parsePercent(percent){
  return parseFloat(percent) / 100;
}

function calcDeg(percent){
  return 360 * percent;
}

// @param {HTMLElement,jQuery} element
// @param {String} percent like `5%`
// @param {Number} width
// @param {Number} height
function RoundPercent(element, percent, width, height) {
  this._element_id = element;
  this._element = $(element);
  this._percent = percent;
  this._width = width;
  this._height = height || width;
}

RoundPercent.prototype.render = function(){
  var element = this._element;

  element.addClass("round-percent")
    .width(this._width)
    .height(this._height)
    .html(this._percent);

  var deg = calcDeg(parsePercent(this._percent));
  var css;

  var after = $('<div class="after">').appendTo(element);
  var before = $('<div class="before">').appendTo(element);

  setTimeout(function(){
    if (deg > 360) {
      return;
    } else if (deg >= 270){
      after.css({
        'border-right': '5px solid #999',
        'border-bottom': '5px solid #999'
      });
      before.css({
        'border-top': '5px solid #999',
        'transform': 'rotate(' + (deg - offsetDeg) + 'deg)'
      });
    } else if (deg >= 180){
      after.css({
        'border-right': '5px solid #999',
        'border-bottom': '5px solid #999'
      });
      before.css({
        'transform': 'rotate(' + (deg + offsetDeg) + 'deg)'
      });
    } else if (deg >= 90){
      after.css({
        'border-right': '5px solid #999'
      });
      before.css({
        'transform': 'rotate(' + (deg + offsetDeg) + 'deg)'
      });
    } else {
      before.css({
        "transform": "rotate(" + (deg + offsetDeg) + "deg)"
      });
    }
  }, 0);
};

module.exports = RoundPercent;
