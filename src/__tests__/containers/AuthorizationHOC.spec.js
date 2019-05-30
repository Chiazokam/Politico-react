import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import AuthorizationHOC from '../../containers/AuthorizationHOC';
jest.mock('../../utils/tokenExpired');

describe('<AuthorizationHOC />', () => {
  let wrapper;

  it('should be a route component', () => {
    wrapper = shallow(<AuthorizationHOC />);
    expect(wrapper.is(Route)).toEqual(true);
  });

  it('renders authenticated route without crashing', () => {
    const wrapper = shallow(<AuthorizationHOC component={() => <div />} token />);
    const render = wrapper.prop('render')({ location: {} });
    const renderWrapper = shallow(render);
    expect(renderWrapper.is('div')).toBe(false);
  });

  it('should redirect unauthenticated request to landing page', () => {
    const wrapper = shallow(<AuthorizationHOC token={false} />);
    const render = wrapper.prop('render')({ location: {} });
    expect(render.props.to).toEqual('/login');
  });
});
