import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store"

const mockStore = configureMockStore();
const store = mockStore({});

test('renders without crashing', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
