import React from 'react';
import "@babel/polyfill";
import { shallow } from 'enzyme';
import { SignupShowcase } from '../../../components/signup/Showcase';

describe('<Signup Showcase />', () => {
  it('renders correctly', () => {
    const props = {
      errors: {
        message: 'Wrong input'
      },
      signupUser: jest.fn()
    };
    const tree = shallow(<SignupShowcase {...props} />);
    expect(tree).toMatchSnapshot(); 
  });
});
