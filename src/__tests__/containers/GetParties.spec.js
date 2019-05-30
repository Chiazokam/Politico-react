import React from 'react';
import { shallow } from 'enzyme';
import { GetParties } from '../../containers';

describe('Get Parties', () => {
  test('should render Get Parties Container correctly', () => {
    const wrapper = shallow(<GetParties />);

    expect(wrapper).toMatchSnapshot();
  });
});
