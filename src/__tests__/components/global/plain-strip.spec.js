import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PlainStrip } from '../../../components/global';

configure({ adapter: new Adapter() });

describe('<PlainStrip />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<PlainStrip />);
  })
  it('should render the PlainStrip component', () => {
    expect(component.find('div').hasClass('form-strip')).toEqual(true);
  })
})
