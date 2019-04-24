import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Showcase } from '../../components/signup';
import { FormField } from '../../components/global';

configure({ adapter: new Adapter() });

describe('<Showcase />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Showcase />);
  })
  it('should check for the Button component', () => {
    expect(component.contains(<FormField />));
  })
})
