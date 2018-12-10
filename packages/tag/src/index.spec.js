import React from 'react';
import { shallow } from 'enzyme';

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
    const wrapper = shallow(<Tag color="red">50XP</Tag>);

    expect(wrapper.hasClass('dc-u-bgc-red')).toBe(true);
    expect(wrapper.hasClass('dc-u-color-white')).toBe(true);
  });

  it('creates a Tag with a text color of grey-dark', () => {
    const wrapper = shallow(<Tag extraClass="dc-u-color-grey-dark">50XP</Tag>);

    expect(wrapper.hasClass('dc-u-color-grey-dark')).toBe(true);
  });

  it('creates a Tag with a default rounded border-radius', () => {
    const wrapper = shallow(<Tag rounded>50XP</Tag>);

    expect(wrapper.hasClass('dc-u-brad-all')).toBe(true);
  });

  it('creates a Tag with a extraClass of dc-u-fx', () => {
    const wrapper = shallow(<Tag extraClass="dc-u-fx">50XP</Tag>);

    expect(wrapper.hasClass('dc-u-fx')).toBe(true);
  });

  it('creates a Tag with the content of 50XP', () => {
    const content = '50XP';
    const wrapper = shallow(<Tag>{content}</Tag>);

    expect(wrapper.text()).toContain(content);
  });
});
