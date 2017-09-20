(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'preact'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('preact'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.preact);
    global.Circle = mod.exports;
  }
})(this, function (exports, _preact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Circle = function Circle(props) {
    var _props$x = props.x,
        x = _props$x === undefined ? 0 : _props$x,
        _props$y = props.y,
        y = _props$y === undefined ? 0 : _props$y,
        _props$radius = props.radius,
        radius = _props$radius === undefined ? 50 : _props$radius;

    return (0, _preact.h)('circle', { cx: x, cy: y, r: radius });
  }; // noinspection ES6UnusedImports
  exports.default = Circle;
});