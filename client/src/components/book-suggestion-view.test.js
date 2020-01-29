import React from 'react';
import { render } from '@testing-library/react';
import BookSuggestionView from './book-suggestion-view.component';
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store"

const mockStore = configureMockStore();
const store = mockStore({});

test('renders without crashing', () => {
    const wrapper = shallow(
        <Provider store={store}>
            <BookSuggestionView />
        </Provider>
    );
    expect(wrapper).toMatchSnapshot();
});
