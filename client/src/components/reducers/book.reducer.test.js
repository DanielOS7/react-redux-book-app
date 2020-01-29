import React from 'react';
import renderer from 'react-test-renderer';
import booksReducer from './book.reducer';

const books = ['a', 'b', 'c'];

describe('Reducer', () => {
    it('should set a list', () => {
        const state = {
            isFetching: false,
            books: [],
            error: undefined
        };
        const newState = booksReducer(state, {
            type: 'FETCH_BOOKS_SUCCESS',
            books,
        });
        expect(newState).toEqual({ isFetching: false, books, error: undefined });
    });
});
