import React from 'react';
import { shallow } from 'enzyme';
import { BecomeCandidate } from '../../containers';

describe('Become Candidate', () => {
  test('should render Become Candidate Container correctly', () => {
    const wrapper = shallow(<BecomeCandidate />);

    expect(wrapper).toMatchSnapshot();
  });
});
