
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

function calcFontSize(height){
  return parseInt(height / 3.33, 10);
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
    .css({
      'line-height': this._height + 'px',
      'font-size': calcFontSize(this._height) + 'px'
    })
    .width(this._width)
    .height(this._height)
    .html(this._percent);

  var deg = calcDeg(parsePercent(this._percent));
  var css = {
    'margin-top': "-" + (this._height / 2 + 5) + "px",
    'margin-left': "-" + (this._width / 2 + 5) + "px"
  };

  var after = $('<div class="after">').appendTo(element);
  var before = $('<div class="before">').appendTo(element);

  after.css(css)
  before.css(css)

  setTimeout(function(){
    if (deg > 360) {
      return;
    } else if (deg > 270){
      element.addClass("highlight270");
      before.css({
        'transform': 'rotate(' + (deg - offsetDeg) + 'deg)'
      });
    } else if (deg > 180){
      element.addClass("highlight180");
      before.css({
        'transform': 'rotate(' + (deg + offsetDeg) + 'deg)'
      });
    } else if (deg > 90){
      element.addClass("highlight90");
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
