import React from 'react';
import "@babel/polyfill";
import { shallow } from 'enzyme';
import { BecomeCandidateUnit } from '../../../components/candidate/BecomeCandidate';

describe('<Become Candidate />', () => {
  it('renders correctly', () => {
    const props = {
      errors: {
        message: 'Wrong input',
        office: 'Chief Judge',
        party: 'New Party',
      },
      getOffices: [],
      getParties: [],
      offices: jest.fn(),
      parties: jest.fn()
    };
    const tree = shallow(<BecomeCandidateUnit {...props} />);
    expect(tree).toMatchSnapshot(); 
  });
});
