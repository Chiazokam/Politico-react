import React from 'react';
import { shallow } from 'enzyme';
import AdminProfile from '../../containers/admin-profile/Layout';

describe('<Admin Profile />', () => {
  it('renders correctly', () => {
    const props = {
    };
    const tree = shallow(<AdminProfile {...props} />);
    expect(tree).toMatchSnapshot(); 
  });
});
