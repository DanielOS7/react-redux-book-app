const initialState = {
    isFetching: false,
    books: [],
    error: undefined
};

export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_BOOKS_PENDING':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                books: action.books
            }
        case 'FETCH_BOOKS_ERROR':
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state;
    }
}
