import React from 'react';
import { shallow } from 'enzyme';
import { Showcase } from '../../../components/admin-profile';

describe('Admin Profile', () => {
  test('should render Admin Profile component correctly', () => {
    const wrapper = shallow(<Showcase />);

    expect(wrapper).toMatchSnapshot();
  });
});
