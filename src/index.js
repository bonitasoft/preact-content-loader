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
      return <Wrap {...state}>{props.children}</Wrap>;
    }
    switch (state.type.toLowerCase()) {
      case 'instagram':
        return <InstagramStyle {...state} />;
        break;

      case 'code':
        return <CodeStyle {...state} />;
        break;

      case 'list':
        return <ListStyle {...state} />;
        break;

      default:
      case 'facebook':
        return <FacebookStyle {...state} />;
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

function propsWithDefault(type, def) {
  return {
    ...type,
    ...{ default: def }
  };
}

const SkateComponent = withComponent(withPreact());
class ContentLoaderWrap extends SkateComponent {
  static props = {
    type: propsWithDefault(props.string, ContentLoader.defaultProps.type),
    speed: propsWithDefault(props.number, ContentLoader.defaultProps.speed),
    width: propsWithDefault(props.number, ContentLoader.defaultProps.width),
    height: propsWithDefault(props.number, ContentLoader.defaultProps.height),
    primaryColor: propsWithDefault(props.string, ContentLoader.defaultProps.primaryColor),
    secondaryColor: propsWithDefault(props.string, ContentLoader.defaultProps.secondaryColor)
  };
  get props() {
    return {
      ...super.props,
      ...{ children: <slot /> }
    };
  }
  renderCallback({ props }) {
    return <ContentLoader {...props} />;
  }
}
customElements.define('content-loader', ContentLoaderWrap);
