import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavList } from '../../../components/global';

configure({ adapter: new Adapter() });

describe('<NavList />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<NavList />);
  })
  it('should render the NavList component', () => {
    expect(component.contains(<NavList />));
    expect(component.find('li')).toHaveLength(1);
  })
})
