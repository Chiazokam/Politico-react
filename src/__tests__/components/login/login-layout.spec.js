import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Login } from '../../../containers';
import { Showcase, ResetPasswordModal } from '../../../components/login';
import { Header, Footer, PlainStrip } from '../../../components/global';

configure({ adapter: new Adapter() });

describe('<Login />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Login />);
  })
  it('should check for the Header component', () => {
    expect(component.contains(<Header />));
  });
  it('should check for the Footer component', () => {
    expect(component.contains(<Footer />));
  });
  it('should check for the PlainStrip component', () => {
    expect(component.contains(<PlainStrip />));
  });
  it('should check for the ResetPasswordModal component', () => {
    expect(component.contains(<ResetPasswordModal />));
  });
  it('should check for the Showcase component', () => {
    expect(component.contains(<Showcase />));
  });
})
