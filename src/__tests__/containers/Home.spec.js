import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../containers';

describe('Home', () => {
  test('should render Home Container correctly', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
