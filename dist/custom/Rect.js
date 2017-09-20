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
    global.Rect = mod.exports;
  }
})(this, function (exports, _preact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Rect = function Rect(props) {
    var _props$x = props.x,
        x = _props$x === undefined ? 0 : _props$x,
        _props$y = props.y,
        y = _props$y === undefined ? 0 : _props$y,
        _props$radius = props.radius,
        radius = _props$radius === undefined ? 0 : _props$radius,
        _props$width = props.width,
        width = _props$width === undefined ? 50 : _props$width,
        _props$height = props.height,
        height = _props$height === undefined ? 50 : _props$height;

    return (0, _preact.h)('rect', { x: x, y: y, rx: radius, ry: radius, width: width, height: height });
  }; // noinspection ES6UnusedImports
  exports.default = Rect;
});