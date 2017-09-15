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
      return <Wrap {...this.state}>{props.children}</Wrap>;
    }
    switch (this.state.type.toLowerCase()) {
      case 'instagram':
        return <InstagramStyle {...this.state} />;
        break;

      case 'code':
        return <CodeStyle {...this.state} />;
        break;

      case 'list':
        return <ListStyle {...this.state} />;
        break;

      default:
      case 'facebook':
        return <FacebookStyle {...this.state} />;
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
