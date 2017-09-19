// noinspection ES6UnusedImports
import { h } from 'preact';

import { shallow } from 'preact-render-spy';
import { expect } from 'chai';

import ContentLoader from '../src/index';
import FacebookStyle from '../src/stylized/FacebookStyle';
import InstagramStyle from '../src/stylized/InstagramStyle';
import CodeStyle from '../src/stylized/CodeStyle';

import Rect from '../src/custom/Rect';
import Circle from '../src/custom/Circle';

describe('<ContentLoader />:', () => {
  describe('Type props are used', () => {
    describe('when type is facebook', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(<ContentLoader type="facebook" />);
      });

      it('should render <FacebookStyle />', () => {
        // console.log("expect(wrapper.find('FacebookStyle')", wrapper.find('FacebookStyle'));
        expect(wrapper.find('FacebookStyle').length).to.be.eq(1);
      });
    });

    describe('when type is instagram', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(<ContentLoader type="instagram" />);
      });

      it('should render <InstagramStyle />', () => {
        expect(wrapper.find('InstagramStyle').length).to.be.eq(1);
      });
    });

    describe('when type is code', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(<ContentLoader type={'code'} />);
      });

      it('should render <CodeStyle />', () => {
        expect(wrapper.find('CodeStyle').length).to.be.eq(1);
      });
    });

    describe('when type is undefined', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(<ContentLoader />);
      });

      it('should render <FacebookStyle />', () => {
        expect(wrapper.find('FacebookStyle').length).to.be.eq(1);
      });
    });

    describe('when type is custom', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(
          <ContentLoader>
            <Rect />
            <Circle />
          </ContentLoader>
        );
      });

      it('should render custom element', () => {
        expect(wrapper[0].children).to.have.length(2);
        expect(wrapper.find('Rect')).to.have.length(1);
        expect(wrapper.find('Circle')).to.have.length(1);
      });
    });
  });

  describe('Props are propagated', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <ContentLoader
          speed={10}
          height={200}
          width={200}
          primaryColor="#000"
          secondaryColor="#fff"
        />
      );
    });

    it('`speed` is a number and used', () => {
      expect(wrapper.attr('speed')).to.equal(10);
    });

    it('`height` is a number and used', () => {
      expect(wrapper.attr('height')).to.equal(200);
    });

    it('`width` is a number and used', () => {
      expect(wrapper.attr('width')).to.equal(200);
    });

    it('`primaryColor` is a string and used', () => {
      expect(wrapper.attr('primaryColor')).to.string('#000');
    });

    it('`secondaryColor` is a string and used', () => {
      expect(wrapper.attr('secondaryColor')).to.string('#fff');
    });
  });
});
