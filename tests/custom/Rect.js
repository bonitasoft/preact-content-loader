// noinspection ES6UnusedImports
import { h } from 'preact';

import { deep } from 'preact-render-spy';
import { expect } from 'chai';

import Rect from '../../src/custom/Rect';

describe('<Rect />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = deep(<Rect />);
  });

  it('has defaults props', () => {
    expect(wrapper.attrs()).to.deep.eq({});
    expect(wrapper.output().attributes).to.deep.eq({
      x: 0,
      y: 0,
      rx: 0,
      ry: 0,
      width: 50,
      height: 50
    });
  });
});
