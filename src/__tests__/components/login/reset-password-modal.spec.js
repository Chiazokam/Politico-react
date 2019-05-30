import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ResetPasswordModal } from '../../../components/login';
import { FormField, Container, Button } from '../../../components/global';

configure({ adapter: new Adapter() });

describe('<ResetPasswordModal />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ResetPasswordModal />);
  })
  it('should check for the Container component', () => {
    expect(component.contains(<Container />));
  });
  it('should check for the Formfield component', () => {
    expect(component.contains(<FormField />));
  });
  it('should check for the Button component', () => {
    expect(component.contains(<Button />));
  });
  it('should check the divs', () => {
    expect(component.find('div')).toHaveLength(4);
  });
})
