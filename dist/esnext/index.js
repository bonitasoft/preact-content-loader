var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// noinspection ES6UnusedImports
import { h, Component } from 'preact';

import Wrap from './Wrap';
// Stylized
import FacebookStyle from './stylized/FacebookStyle';
import InstagramStyle from './stylized/InstagramStyle';
import CodeStyle from './stylized/CodeStyle';
import ListStyle from './stylized/ListStyle';
// Custom
import Rect from './custom/Rect';
import Circle from './custom/Circle';

//custom-element
import { props, withComponent } from 'skatejs/esnext';
import withPreact from '@skatejs/renderer-preact/esnext';

class ContentLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: props.style,
      type: props.type,
      speed: props.speed,
      width: props.width,
      height: props.height,
      primaryColor: props.primaryColor,
      secondaryColor: props.secondaryColor
    };
  }

  render(props, state) {
    if (!state.type) {
      return h(
        Wrap,
        state,
        props.children
      );
    }
    switch (state.type.toLowerCase()) {
      case 'instagram':
        return h(InstagramStyle, state);
        break;

      case 'code':
        return h(CodeStyle, state);
        break;

      case 'list':
        return h(ListStyle, state);
        break;

      default:
      case 'facebook':
        return h(FacebookStyle, state);
        break;
    }
  }
}

ContentLoader.defaultProps = {
  type: 'facebook',
  speed: 2,
  width: 400,
  height: 130,
  primaryColor: '#f0f0f0',
  secondaryColor: '#e0e0e0'
};

export default ContentLoader;
export { Rect, Circle };

const SkateComponent = withComponent(withPreact());
class ContentLoaderWrap extends SkateComponent {
  get props() {
    return _extends({}, super.props, { children: h('slot', null) });
  }
  renderCallback({ props }) {
    return h(ContentLoader, props);
  }
}
ContentLoaderWrap.props = {
  type: props.string,
  speed: props.number,
  width: props.number,
  height: props.number,
  primaryColor: props.string,
  secondaryColor: props.string
};
customElements.define('content-loader', ContentLoaderWrap);