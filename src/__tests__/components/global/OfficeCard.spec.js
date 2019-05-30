import React from 'react';
import { shallow } from 'enzyme';
import { OfficeCard } from '../../../components/global';

describe('Office Card', () => {
  test('should render Office Card Container correctly', () => {
    const wrapper = shallow(<OfficeCard />);

    expect(wrapper).toMatchSnapshot();
  });
});
