import React from 'react';
import { shallow } from 'enzyme';
import { GetOffices } from '../../containers';

describe('Get Offices', () => {
  test('should render Get Offices Container correctly', () => {
    const wrapper = shallow(<GetOffices />);

    expect(wrapper).toMatchSnapshot();
  });
});
