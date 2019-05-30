import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextStrip } from '../../../components/global';

configure({ adapter: new Adapter() });

describe('<TextStrip />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<TextStrip />);
  })
  it('should render the TextStrip component', () => {
    expect(component.find('div').hasClass('strip-mend')).toEqual(true);
  })
})
