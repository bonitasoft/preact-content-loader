// noinspection ES6UnusedImports
import { h } from 'preact';

const Circle = props => {
  const { x = 0, y = 0, radius = 50 } = props;
  return h('circle', { cx: x, cy: y, r: radius });
};

export default Circle;