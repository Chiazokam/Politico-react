import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CreateParty } from '../../components/party';
import { FormField, Container, Button } from '../../components/global';

configure({ adapter: new Adapter() });

describe('<CreateParty />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<CreateParty />);
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
  it('should simulate the submission', () => {
    component.find(Button).simulate('click');
    expect(component.state().submit).toEqual(false);
  });
  it('should check for the clearField method', () => {
    const instance = component.instance();
    instance.clearField();
    expect(component.state('errors')).toBe('');
  });
})
