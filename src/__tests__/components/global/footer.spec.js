import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Footer } from '../../../components/global';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Footer />);
  })
  it('should test the Footer component for the tag with phone number', () => {
    expect(component.contains(<a className="footer-contact-text"><i className="fas fa-phone"></i>07032425466</a>)).toEqual(true);
  })
  it('should test the Footer component for the tag with the brand name', () => {
    expect(component.contains(<p>P<span className="brandname-span">olitico</span>, copyright &copy; 2019</p>)).toEqual(true);
  })
})
