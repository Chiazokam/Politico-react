import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Showcase } from '../../components/login';
import { FormField, Container, Button } from '../../components/global';

configure({ adapter: new Adapter() });

describe('<Showcase />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Showcase />);
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
    expect(component.find('div')).toHaveLength(2);
  });
  it('should check the divs', () => {
    component.find(Button).simulate('click');
    expect(component.state().submit).toEqual(false);
  });
  it('should check for the clearField method', () => {
    const instance = component.instance();
    instance.clearField();
    expect(component.state('errors')).toBe('');
  });
  it('should change the state of isModalOpen', () => {
    const instance = component.instance();
    instance.showModal();
    expect(component.state('isModalOpen')).toBe(true);
  });
  it('should change the state of isModalOpen', () => {
    const instance = component.instance();
    instance.closeModal();
    expect(component.state('isModalOpen')).toBe(false);
  });
})
