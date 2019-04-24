import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hamburger from '../../components/global/Hamburger';

configure({ adapter: new Adapter() });

describe('<Hamburger />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Hamburger />);
  })
  it('should render the Hamburger component', () => {
    expect(component.find('div')).toHaveLength(4);
  })
})
