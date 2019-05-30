import React from 'react';
import { shallow } from 'enzyme';
import { GetOfficesUnit } from '../../../components/office/Get-offices';

describe('<Get Offices />', () => {
  it('renders correctly', () => {
    const props = {
      getOffices: [],
      offices: jest.fn()
    };
    const tree = shallow(<GetOfficesUnit {...props} />);
    expect(tree).toMatchSnapshot(); 
  });
});
