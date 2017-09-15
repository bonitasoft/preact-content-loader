import { h, render, Component } from 'preact';

import ContentLoader from '../src/index';
import { Rect, Circle } from '../src/index';

const defaultStyle = {
  maxWidth: 560,
  margin: '2rem auto',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial'
};

const Container = props => <div style={defaultStyle}>{props.children}</div>;

const MyLoader = () => {
  return (
    <ContentLoader height={140} speed={1} primaryColor={'#333'} secondaryColor={'#999'}>
      <Circle x={195} y={30} radius={30} />
      <Rect x={50} y={80} height={10} radius={5} width={300} />
      <Rect x={75} y={100} height={10} radius={5} width={250} />
    </ContentLoader>
  );
};

const CustomLoader = () => (
  <div>
    <Container>
      Facebook
      <ContentLoader />
    </Container>
    <Container>
      Instagram
      <ContentLoader type="instagram" />
    </Container>
    <Container>
      Code
      <ContentLoader type="code" />
    </Container>
    <Container>
      List
      <ContentLoader type="list" />
    </Container>
    <Container>
      Custom Loader
      <MyLoader />
    </Container>
  </div>
);

render(<CustomLoader />, document.body);
