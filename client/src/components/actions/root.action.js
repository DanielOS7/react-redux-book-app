export function fetchBooks() {
    return function(dispatch) {
      dispatch({
        type: 'FETCH_BOOKS_REQUEST'
      });
      return fetch('http://localhost:2700/books')
        .then(response => response.json().then(data => ({ response, data })))
        .then(({ response, data }) => {
          if (!response.ok) {
            dispatch({
              type: 'FETCH_BOOKS_FAILURE',
              error: data.error
            });
          } else {
            console.log(data)
            dispatch({
              type: 'FETCH_BOOKS_SUCCESS',
              books: data
            });
          }
        });
    }
  }
  