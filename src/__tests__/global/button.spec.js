import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '../../components/global';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Button />);
  })
  it('should render the Button component', () => {
    expect(component.find('button'));
  })
})
