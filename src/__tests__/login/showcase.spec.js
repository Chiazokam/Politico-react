import React from 'react';
import {Provider} from "react-redux";
import configureStore from '../../store/configure-store';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Showcase } from '../../components/login';
import { FormField, Container, Button } from '../../components/global';

const store = configureStore();
configure({ adapter: new Adapter() });

describe('<Showcase />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Provider store={store}><Showcase /></Provider>);
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
})
