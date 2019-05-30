import React from 'react';
import "@babel/polyfill";
import { shallow } from 'enzyme';
import { CreateOfficeUnit } from '../../../components/office/Create-office';

describe('<Create Office />', () => {
  it('renders correctly', () => {
    const props = {
      errors: {
        message: 'Wrong input',
        office: 'Chief Judge'
      },
      offices: jest.fn()
    };
    const tree = shallow(<CreateOfficeUnit {...props} />);
    expect(tree).toMatchSnapshot(); 
  });
});
