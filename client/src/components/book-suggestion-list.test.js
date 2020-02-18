import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import BookSuggestionList from './book-suggestion-list.component';

const books = [
    {
        id: 1,
        name: "First Book"
    },
    {
        id: 2,
        name: "Second Book"
    }
]

describe('BookSuggestionList', () => {
    test('renders without crashing', () => {
        const component = renderer.create(
            <BookSuggestionList books={books} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should contain written header', () => {
        const wrapper = shallow(<BookSuggestionList books={books} />);
        const header = wrapper.find('h3');
        console.log(header.text());
        expect(header.text()).toEqual('Books You Might Like');
    });
});
