import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FormField } from '../../../components/global';

configure({ adapter: new Adapter() });

describe('<FormField />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FormField />);
  })
  it('should render the FormField component', () => {
    expect(component.find('div')).toHaveLength(2);
  })
})
