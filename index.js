var $ = require("zepto");

var offsetDeg = 45; // start from top(12 o'clock)

// @param {String} percent like `5%`
// @return {Number} like `0.05`
function parsePercent(percent) {
  return parseFloat(percent) / 100;
}

function calcDeg(percent) {
  return 360 * percent;
}

function calcFontSize(height) {
  return parseInt(height / 3.33, 10);
}

function transform(element, deg){
  element.css({
    'transform': 'rotate(' + deg  + 'deg)',
    '-webkit-transform': 'rotate(' + deg + 'deg)'
  });
}

function RoundPercent(config) {
  this._element = $(config.element);
  this._percent = config.percent;
  this._width = config.width;
  this._height = config.height || config.width;
  this._border = config.border || 2;
  this._fill = config.fill;
}

RoundPercent.prototype.render = function() {
  var element = this._element;

  element.addClass("round-percent")
    .width(this._width)
    .height(this._height)
    .css({
      'border-width': this._border + 'px'
    });

  if (this._fill !== false){
    element.html(this._fill || this._percent);
    if (!this._fill) {
      element.css({
        'line-height': this._height + 'px',
        'font-size': calcFontSize(this._height) + 'px'
      });
    }
  }

  var deg = calcDeg(parsePercent(this._percent));
  var css = {
    'border-width': this._border + 'px',
    'margin-top': "-" + (this._height / 2 + this._border) + "px",
    'margin-left': "-" + (this._width / 2 + this._border) + "px"
  };

  var after = $('<div class="round-percent-after">').appendTo(element);
  var before = $('<div class="round-percent-before">').appendTo(element);

  after.css(css)
  before.css(css)

  setTimeout(function() {
    if (deg > 360) {
      deg = 360;
    }
    if (deg > 270) {
      element.addClass("round-percent-highlight270");
      transform(before, deg - offsetDeg);
    } else if (deg > 180) {
      element.addClass("round-percent-highlight180");
      transform(before, deg - offsetDeg);
    } else if (deg > 90) {
      element.addClass("round-percent-highlight90");
      transform(before, deg - offsetDeg);
    } else {
      transform(before, deg + offsetDeg);
    }
  }, 0);
};

module.exports = RoundPercent;
