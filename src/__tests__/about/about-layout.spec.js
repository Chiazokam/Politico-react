import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { About } from '../../containers';
import { Showcase } from '../../components/about';
import { Header, Footer, TextStrip } from '../../components/global';

configure({ adapter: new Adapter() });

describe('<About />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<About />);
  })
  it('should check for the Header component', () => {
    expect(component.contains(<Header />));
  });
  it('should check for the Footer component', () => {
    expect(component.contains(<Footer />));
  });
  it('should check for the TextStrip component', () => {
    expect(component.contains(<TextStrip />));
  });
  it('should check for the Showcase component', () => {
    expect(component.contains(<Showcase />));
  });
})
