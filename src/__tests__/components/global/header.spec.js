import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header, Container } from '../../../components/global';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header navItems={['home', 'about', 'login']}/>);
  })
  it('should render the Header component', () => {
    expect(component.contains(<Container />));
    expect(component.find('div')).toHaveLength(5);
  });

  it('correctly sets state when email is valid', () => {
    const input = component.find('.menu-ham');
    
    input.simulate('click');
    expect(component.state().isOpen).toEqual(true);
  });
})
