(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'preact', 'uuid'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('preact'), require('uuid'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.preact, global.uuid);
    global.Wrap = mod.exports;
  }
})(this, function (exports, _preact, _uuid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _uuid2 = _interopRequireDefault(_uuid);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // noinspection ES6UnusedImports
  var Wrap = function Wrap(props) {
    var idClip = _uuid2.default.v1();
    var idGradient = _uuid2.default.v1();

    return (0, _preact.h)(
      'svg',
      {
        viewBox: '0 0 ' + props.width + ' ' + props.height,
        version: '1.1',
        style: props.style,
        preserveAspectRatio: 'xMidYMid meet'
      },
      (0, _preact.h)('rect', {
        style: { fill: 'url(#' + idGradient + ')' },
        'clip-path': 'url(#' + idClip + ')',
        x: '0',
        y: '0',
        width: props.width,
        height: props.height
      }),
      (0, _preact.h)(
        'defs',
        null,
        (0, _preact.h)(
          'clipPath',
          { id: '' + idClip },
          props.children
        ),
        (0, _preact.h)(
          'linearGradient',
          { id: '' + idGradient },
          (0, _preact.h)(
            'stop',
            { offset: '0%', 'stop-color': props.primaryColor },
            (0, _preact.h)('animate', {
              attributeName: 'offset',
              values: '-2; 1',
              dur: props.speed + 's',
              repeatCount: 'indefinite'
            })
          ),
          (0, _preact.h)(
            'stop',
            { offset: '50%', 'stop-color': props.secondaryColor },
            (0, _preact.h)('animate', {
              attributeName: 'offset',
              values: '-1.5; 1.5',
              dur: props.speed + 's',
              repeatCount: 'indefinite'
            })
          ),
          (0, _preact.h)(
            'stop',
            { offset: '100%', 'stop-color': props.primaryColor },
            (0, _preact.h)('animate', {
              attributeName: 'offset',
              values: '-1; 2',
              dur: props.speed + 's',
              repeatCount: 'indefinite'
            })
          )
        )
      )
    );
  };

  exports.default = Wrap;
});