import React from 'react';
import { shallow } from 'enzyme';
import { CreateOffice } from '../../containers';

describe('Create Office', () => {
  test('should render Create Office Container correctly', () => {
    const wrapper = shallow(<CreateOffice />);

    expect(wrapper).toMatchSnapshot();
  });
});
