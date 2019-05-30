import React from 'react';
import { shallow } from 'enzyme';
import { CreateCandidate } from '../../containers';

describe('Create Candidate', () => {
  test('should render Create Candidate Container correctly', () => {
    const wrapper = shallow(<CreateCandidate />);

    expect(wrapper).toMatchSnapshot();
  });
});
