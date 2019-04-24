import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Showcase } from '../../components/about';

configure({ adapter: new Adapter() });

describe('<Showcase />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Showcase />);
  })
  it('should test for the div element', () => {
    expect(component.find('div')).toHaveLength(1);
  })
  it('should test for the p element', () => {
    expect(component.find('p')).toHaveLength(3);
  })
})
