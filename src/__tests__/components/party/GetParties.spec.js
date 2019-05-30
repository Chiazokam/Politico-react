import React from 'react';
import { shallow } from 'enzyme';
import { GetPartiesUnit } from '../../../components/party/Get-parties';

describe('<Get Parties/>', () => {
  it('renders correctly', () => {
    const props = {
      getParties: [],
      parties: jest.fn()
    };
    const tree = shallow(<GetPartiesUnit {...props} />);
    expect(tree).toMatchSnapshot(); 
  });
});
