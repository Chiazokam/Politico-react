import React from 'react';
import { shallow } from 'enzyme';
import { ToastMessage } from '../../../components/global';

describe('<ToastMessage />', () => {
  it('renders correctly', () => {
    
    const tree = shallow(<ToastMessage />);
    expect(tree).toMatchSnapshot(); 
  });
});
