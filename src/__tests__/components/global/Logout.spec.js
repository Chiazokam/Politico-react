import React from 'react';
import { shallow } from 'enzyme';
import { Logout } from '../../../components/global';

describe('<Logout />', () => {
  it('renders correctly', () => {
    const props = {
      logout: jest.fn()
    };
    const tree = shallow(<Logout {...props} />);
    expect(tree).toMatchSnapshot(); 
  });
});
