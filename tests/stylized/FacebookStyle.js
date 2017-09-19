// noinspection ES6UnusedImports
import { h } from 'preact';

import { deep } from 'preact-render-spy';
import { expect } from 'chai';

import FacebookStyle from '../../src/stylized/FacebookStyle';

describe('<FacebookStyle />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = deep(<FacebookStyle />);
  });

  it('has a `svg`', () => {
    expect(wrapper.find('svg')).to.have.length(1);
  });

  it('has a `rect` with `clip-path`', () => {
    expect(
      wrapper
        .find('rect')
        .at(0)
        .attr('clip-path')
    ).to.be.contain('url(#');
  });

  it('has a `linearGradient`', () => {
    expect(wrapper.find('linearGradient')).to.have.length(1);
  });

  it('has three `stop`', () => {
    expect(wrapper.find('stop')).to.have.length(3);
  });

  it('has `stop` inside the `linearGradient`', () => {
    expect(wrapper.find('linearGradient').find('stop')).to.have.length(3);
  });
});
