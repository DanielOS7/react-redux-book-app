const INITIAL_STATE = {
    books: [],
    isFetching: false,
    error: undefined
  };

  function booksReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'FETCH_BOOKS_REQUEST':
        return Object.assign({}, state, {
          isFetching: true
        });
      case 'FETCH_BOOKS_SUCCESS':
        console.log("Hey there")
        return Object.assign({}, state, {
          isFetching: false,
          books: action.books
        });
      case 'FETCH_BOOKS_FAILURE':
        return Object.assign({}, state, {
          isFetching: false,
          error: action.error
        });
      default:
        return state;
    }
  }


export default booksReducer;
