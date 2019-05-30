import React from 'react';
import { shallow } from 'enzyme';
import { UserLayout } from '../../containers/user-profile/Layout';
import user from '../../constants/user.constants';

describe('<User Profile />', () => {
  global.localStorage.setItem('user', '{}')
  it('renders correctly', () => {
   
      const getCandidacy = jest.fn()
    
    const tree = shallow(<UserLayout getCandidacy={getCandidacy} />);
    expect(tree).toMatchSnapshot(); 
  });
});
