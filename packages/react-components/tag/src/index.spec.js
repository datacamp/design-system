import React from 'react';
import { mount } from 'enzyme';
import { getColor, getContrastColor } from '@datacamp/waffles-core';
import { matchers } from 'jest-emotion';
import Tag from '.';

expect.extend(matchers);

describe('<Tag />', () => {
  it('creates a default tag', () => {
    const tag = mount(<Tag>50XP</Tag>);
    expect(tag).toMatchSnapshot();
  });

  it('sets the background color and infers text color', () => {
    const wrapper = mount(<Tag color="red">50XP</Tag>);
    const backgroundColor = getColor('red');
    const textColor = getContrastColor('red');

    expect(wrapper).toHaveStyleRule('background-color', backgroundColor);
    expect(wrapper).toHaveStyleRule('color', textColor);
  });

  it('sets the text color based on the property when provided', () => {
    const wrapper = mount(<Tag textColor="red">50XP</Tag>);

    expect(wrapper).toHaveStyleRule('color', getColor('red'));
  });

  it('has a default border radius', () => {
    const wrapper = mount(<Tag>50XP</Tag>);

    expect(wrapper).toHaveStyleRule('border-radius', '12px');
  });

  it('sets the border radius when rounded=true', () => {
    const wrapper = mount(<Tag rounded>50XP</Tag>);

    expect(wrapper).toHaveStyleRule('border-radius', '4px');
  });

  it('Adds the extraClass to the className', () => {
    const wrapper = mount(<Tag extraClass="test-class">50XP</Tag>);

    expect(wrapper.find('div').hasClass('test-class')).toBe(true);
  });
});
