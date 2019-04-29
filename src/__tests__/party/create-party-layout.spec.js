import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CreateParty as Layout } from '../../containers';
import { CreateParty } from '../../components/party';
import { Header, Footer, PlainStrip } from '../../components/global';

configure({ adapter: new Adapter() });

describe('<Layout />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Layout />);
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
  it('should check for the CreateParty component', () => {
    expect(component.contains(<CreateParty />));
  });
})
