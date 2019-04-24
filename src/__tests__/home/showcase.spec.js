import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Showcase } from '../../components/home';
import { Container, Button } from '../../components/global';

configure({ adapter: new Adapter() });

describe('<Showcase />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Showcase />);
  })
  it('should check for the Container component', () => {
    expect(component.contains(<Container />));
  })
  it('should test the p element', () => {
    expect(component.find('p')).toHaveLength(1);
  })
  it('should check for the Button component', () => {
    expect(component.contains(<Button />));
  })
})
