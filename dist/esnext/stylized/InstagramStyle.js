var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// noinspection ES6UnusedImports
import { h } from 'preact';
import Wrap from '../Wrap';

const InstagramStyle = props => {
  return h(
    Wrap,
    _extends({}, props, { height: '480' }),
    h('circle', { cx: '30', cy: '30', r: '30' }),
    h('rect', { x: '75', y: '13', rx: '4', ry: '4', width: '100', height: '13' }),
    h('rect', { x: '75', y: '37', rx: '4', ry: '4', width: '50', height: '8' }),
    h('rect', { x: '0', y: '70', rx: '5', ry: '5', width: '400', height: '400' })
  );
};

export default InstagramStyle;