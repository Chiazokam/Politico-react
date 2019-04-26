import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Signup } from '../../containers';
import { Showcase } from '../../components/signup';
import { Header, Footer, PlainStrip } from '../../components/global';

configure({ adapter: new Adapter() });

describe('<Signup />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Signup />);
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
  it('should check for the Showcase component', () => {
    expect(component.contains(<Showcase />));
  });
})
