import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../containers/App';

describe('Container: App', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    console.log(jest.fn());
    expect(wrapper.exists()).toBe(true);
  });
});
