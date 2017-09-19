// noinspection ES6UnusedImports
import { h } from 'preact';

import { shallow, deep } from 'preact-render-spy';
import { expect } from 'chai';

import Wrap from '../src/Wrap';

describe("<Wrap /> Check id's to render the SVG", () => {
  it('is mask with the same `idClip`', () => {
    const wrapper = shallow(<Wrap />);
    let idClip = wrapper.find('clipPath')[0].attributes.id;
    expect(wrapper.find('rect')[0].attributes['clip-path']).to.be.equal(`url(#${idClip})`);
  });

  it('is linearGradient with the same `idClip`', () => {
    const wrapper = shallow(<Wrap />);
    let idGradient = wrapper.find('linearGradient')[0].attributes.id;
    expect(wrapper.find('rect')[0].attributes['style'].fill).to.have.equal(`url(#${idGradient})`);
  });
});
