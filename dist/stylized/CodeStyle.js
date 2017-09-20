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
    global.CodeStyle = mod.exports;
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
  var CodeStyle = function CodeStyle(props) {
    return (0, _preact.h)(
      _Wrap2.default,
      props,
      (0, _preact.h)('rect', { x: '0', y: '0', rx: '3', ry: '3', width: '70', height: '10' }),
      (0, _preact.h)('rect', { x: '80', y: '0', rx: '3', ry: '3', width: '100', height: '10' }),
      (0, _preact.h)('rect', { x: '190', y: '0', rx: '3', ry: '3', width: '10', height: '10' }),
      (0, _preact.h)('rect', { x: '15', y: '20', rx: '3', ry: '3', width: '130', height: '10' }),
      (0, _preact.h)('rect', { x: '155', y: '20', rx: '3', ry: '3', width: '130', height: '10' }),
      (0, _preact.h)('rect', { x: '15', y: '40', rx: '3', ry: '3', width: '90', height: '10' }),
      (0, _preact.h)('rect', { x: '115', y: '40', rx: '3', ry: '3', width: '60', height: '10' }),
      (0, _preact.h)('rect', { x: '185', y: '40', rx: '3', ry: '3', width: '60', height: '10' }),
      (0, _preact.h)('rect', { x: '0', y: '60', rx: '3', ry: '3', width: '30', height: '10' })
    );
  };

  exports.default = CodeStyle;
});