import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Container } from '../../components/global';

configure({ adapter: new Adapter() });

describe('<Container />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Container />);
  })
  it('should render the Container component', () => {
    expect(component.find('div'));
  })
})
