
var $ = require("jquery");

var offsetDeg = 45; // start from top(90deg)

// @param {String} percent like `5%`
// @return {Number} like `0.05`
function parsePercent(percent){
  return parseFloat(percent) / 100;
}

function formatPercent(percent){
  return parseInt(percent * 100, 10) + "%";
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

  if (!this._style) {
    this._style = $('<style></style>').appendTo("head")
  }

  element.addClass("round-percent")
    .width(this._width)
    .height(this._height)
    .html(this._percent);

  var deg = calcDeg(parsePercent(this._percent));
  var css;

  if (deg > 360) {
    return;
  } else if (deg >= 270){
    css = [
      this._element_id + '.round-percent:after{',
        'border-right:5px solid #999;',
        'border-bottom:5px solid #999;',
      '}'];
  } else if (deg >= 180){
    css = [
      this._element_id + '.round-percent:after{',
        'border-right:5px solid #999;',
        'border-bottom:5px solid #999;',
      '}',
      this._element_id + '.round-percent:before{',
        'transform:rotate(' + (deg + offsetDeg) + 'deg);',
      '}'
      ];
  } else if (deg >= 90){
    css = [
      this._element_id + '.round-percent:after{',
        'border-right:5px solid #999;',
      '}',
      this._element_id + '.round-percent:before{',
        'transform:rotate(' + (deg + offsetDeg) + 'deg);',
      '}'
      ];
  } else {
    css = [
      this._element_id + '.round-percent:before{',
        'transform:rotate(' + (deg + offsetDeg) + 'deg);',
      '}'
    ]
  }
  this._style.text( css.join("") );
};

module.exports = RoundPercent;
