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

  render(props) {
    if (props.children && props.children.length > 0) {
      return h(
        Wrap,
        this.state,
        props.children
      );
    }
    switch (this.state.type.toLowerCase()) {
      case 'instagram':
        return h(InstagramStyle, this.state);
        break;

      case 'code':
        return h(CodeStyle, this.state);
        break;

      case 'list':
        return h(ListStyle, this.state);
        break;

      default:
      case 'facebook':
        return h(FacebookStyle, this.state);
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