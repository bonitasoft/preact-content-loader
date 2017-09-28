// noinspection ES6UnusedImports
import { h } from 'preact';
import { props, withComponent } from 'skatejs/esnext';
import withPreact from '@skatejs/renderer-preact/esnext';

const Rect = props => {
  const { x = 0, y = 0, radius = 0, width = 50, height = 50 } = props;
  console.log('It works!!!');
  return h('rect', { x: x, y: y, rx: radius, ry: radius, width: width, height: height });
};

// export default Rect;

const SkateComponent = withComponent(withPreact());
class WebComponentWrap extends SkateComponent {
  renderCallback({ props }) {
    return h(Rect, props);
  }
}
WebComponentWrap.props = {
  x: props.number,
  y: props.number,
  radius: props.number,
  width: props.number,
  height: props.number
};
customElements.define('content-loader-rect', WebComponentWrap);