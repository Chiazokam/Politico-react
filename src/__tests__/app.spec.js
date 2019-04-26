import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import { BrowserRouter, Route } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  })
  it('should check for the BrowserRouter component', () => {
    expect(component.contains(<BrowserRouter />));
  });
  it('should check for the Route component', () => {
    expect(component.contains(<Route />));
  });
});
