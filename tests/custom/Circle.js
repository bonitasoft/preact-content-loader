// noinspection ES6UnusedImports
import { h } from 'preact';

import { deep } from 'preact-render-spy';
import { expect } from 'chai';

import Circle from '../../src/custom/Circle';

describe('<Circle />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = deep(<Circle />);
  });

  it('has defaults props', () => {
    expect(wrapper.attrs()).to.deep.eq({});
    expect(wrapper.output().attributes).to.deep.eq({ cx: 0, cy: 0, r: 50 });
  });
});
