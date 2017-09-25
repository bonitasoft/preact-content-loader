// 'use strict';
//
// var _Rect = require('./custom/Rect');
//
// var _Rect2 = _interopRequireDefault(_Rect);
//
// var _preact = require('preact');
//
// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//
// console.log('Passing here4');
//
// var RectCustom = Object.create(HTMLElement.prototype, {
//   attachedCallback: {
//     value: function value() {
//       var mountPoint = document.createElement('div');
//       this.createShadowRoot().appendChild(mountPoint);
//
//       var x = this.getAttribute('x');
//       var y = this.getAttribute('y');
//       var radius = this.getAttribute('radius');
//       var width = this.getAttribute('width');
//       var height = this.getAttribute('height');
//
//       console.log('Passing here1');
//
//       //this will generate the html.
//       (0, _preact.render)(React.createElement(_Rect2.default, { x: x, y: y, radius: radius, width: width, height: height }), mountPoint);
//     }
//   }
// });
//
// window.customElements.define('rect-custom', RectCustom);
// console.log('Passing here2');

// console.log('Passing here4');
//
import Rect from './custom/Rect';
import { h, render } from 'preact';

const Wrapper = ({x, y, radius, width, height}) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    version="1.1"
    preserveAspectRatio="xMidYMid meet">

    <Rect x={x} y={y} radius={radius} width={width} height={height} />

  </svg>
);

const RectCustom = Object.create(HTMLElement.prototype, {
  attachedCallback: {
    value: function() {
      const mountPoint = document.createElement('div');
      this.createShadowRoot().appendChild(mountPoint);

      const x = this.getAttribute('x');
      const y = this.getAttribute('y');
      const radius = this.getAttribute('radius');
      const width = this.getAttribute('width');
      const height = this.getAttribute('height');

      console.log('args', x, y, radius, width, height);
      console.log('Passing here1x');

      //this will generate the html.
      render(<Wrapper x={x} y={y} radius={radius} width={width} height={height} />, mountPoint);
    }
  }
});

// window.customElements.define('rect-custom', RectCustom);
document.registerElement('rect-custom', { prototype: RectCustom });
console.log('Passing here2');
