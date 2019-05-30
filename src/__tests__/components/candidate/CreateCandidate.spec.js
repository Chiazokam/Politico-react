import React from 'react';
import "@babel/polyfill";
import { shallow } from 'enzyme';
import { CreateCandidateUnit } from '../../../components/candidate/CreateCandidate';

describe('<Create Candidate />', () => {
  it('renders correctly', () => {
    const props = {
      errors: {
        message: 'Wrong input'
      },
      candidates: [],
      createCandidate: jest.fn(),
      getCandidatesRequest: jest.fn()
    };
    const tree = shallow(<CreateCandidateUnit {...props} />);
    expect(tree).toMatchSnapshot(); 
  });
});
