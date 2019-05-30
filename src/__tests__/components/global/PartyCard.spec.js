import React from 'react';
import { shallow } from 'enzyme';
import { PartyCard } from '../../../components/global';

describe('Party Card', () => {
  test('should render Party Card Container correctly', () => {
    const wrapper = shallow(<PartyCard />);

    expect(wrapper).toMatchSnapshot();
  });
});
