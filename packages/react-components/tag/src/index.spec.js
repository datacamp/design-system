import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import { getColor, getContrastColor } from '@datacamp/waffles-core';

import Tag from '.';

describe('<Tag />', () => {
  it('instantiates correctly the component', () => {
    const tag = shallow(<Tag>50XP</Tag>);
    expect(tag).toMatchSnapshot();
  });

  it('creates a default Tag', () => {
    const wrapper = shallow(<Tag>50XP</Tag>);

    expect(wrapper.prop('className')).toEqual('dc-tag');
  });

  it('creates a Tag with a red background and white text color', () => {
    const wrapper = mount(<Tag color="red">50XP</Tag>);
    const backgroundColor = getColor('red');
    const textColor = getContrastColor('red');

    expect(wrapper).toHaveStyleRule('background-color', backgroundColor);
    expect(wrapper).toHaveStyleRule('color', textColor);
  });

  // it('creates a Tag with a text color of grey-dark', () => {
  //   const wrapper = shallow(<Tag extraClass="dc-u-color-grey-dark">50XP</Tag>);

  //   expect(wrapper.hasClass('dc-u-color-grey-dark')).toBe(true);
  // });

  // it('creates a Tag with a default rounded border-radius', () => {
  //   const wrapper = shallow(<Tag rounded>50XP</Tag>);

  //   expect(wrapper.hasClass('dc-u-brad-all')).toBe(true);
  // });

  // it('creates a Tag with a extraClass of dc-u-fx', () => {
  //   const wrapper = shallow(<Tag extraClass="dc-u-fx">50XP</Tag>);

  //   expect(wrapper.hasClass('dc-u-fx')).toBe(true);
  // });

  // it('creates a Tag with the content of 50XP', () => {
  //   const content = '50XP';
  //   const wrapper = shallow(<Tag>{content}</Tag>);

  //   expect(wrapper.text()).toContain(content);
  // });
});
