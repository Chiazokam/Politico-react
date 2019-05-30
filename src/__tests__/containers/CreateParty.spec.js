import React from 'react';
import { shallow } from 'enzyme';
import { CreateParty } from '../../containers';

describe('Create Party', () => {
  test('should render Create Party Container correctly', () => {
    const wrapper = shallow(<CreateParty />);

    expect(wrapper).toMatchSnapshot();
  });
});
