(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'preact', '../Wrap'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('preact'), require('../Wrap'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.preact, global.Wrap);
    global.ListStyle = mod.exports;
  }
})(this, function (exports, _preact, _Wrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Wrap2 = _interopRequireDefault(_Wrap);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // noinspection ES6UnusedImports
  var ListStyle = function ListStyle(props) {
    return (0, _preact.h)(
      _Wrap2.default,
      props,
      (0, _preact.h)('rect', { x: '0', y: '0', rx: '3', ry: '3', width: '250', height: '10' }),
      (0, _preact.h)('rect', { x: '20', y: '20', rx: '3', ry: '3', width: '220', height: '10' }),
      (0, _preact.h)('rect', { x: '20', y: '40', rx: '3', ry: '3', width: '170', height: '10' }),
      (0, _preact.h)('rect', { x: '0', y: '60', rx: '3', ry: '3', width: '250', height: '10' }),
      (0, _preact.h)('rect', { x: '20', y: '80', rx: '3', ry: '3', width: '200', height: '10' }),
      (0, _preact.h)('rect', { x: '20', y: '100', rx: '3', ry: '3', width: '80', height: '10' })
    );
  };

  exports.default = ListStyle;
});