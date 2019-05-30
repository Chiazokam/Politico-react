import React from 'react';
import "@babel/polyfill";
import { shallow } from 'enzyme';
import { CreatePartyUnit } from '../../../components/party/Create-party';

describe('<Create Party />', () => {
  it('renders correctly', () => {
    const props = {
      errors: {
        message: 'Wrong input',
        party: 'New Party',
      },
      getParties: [],
      parties: jest.fn()
    };
    const tree = shallow(<CreatePartyUnit {...props} />);
    expect(tree).toMatchSnapshot(); 
  });
});
