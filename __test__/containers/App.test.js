import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../src/containers/App';

import { Route } from 'react-router';
import LoginPage from '../../src/containers/LoginPage';

describe('Container: App', () => {
  const wrapper = shallow(<App />);

  it('renders correct routes', () => {
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});

    expect(pathMap['/']).toBe(LoginPage);
    expect(pathMap['/login']).toBe(LoginPage);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });


  it('renders the correct number of Routes', () => {
    expect(wrapper.find('Route').length).toEqual(3);
  });
  
});