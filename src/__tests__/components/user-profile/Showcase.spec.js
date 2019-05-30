import React from 'react';
import { shallow } from 'enzyme';
import { Showcase } from '../../../components/user-profile';

describe('User Profile', () => {
  test('should render User Profile component correctly', () => {
    const wrapper = shallow(<Showcase />);

    expect(wrapper).toMatchSnapshot();
  });
});
