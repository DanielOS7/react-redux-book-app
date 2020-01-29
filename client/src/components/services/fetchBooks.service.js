import { fetchBooksPending, fetchBooksSuccess, fetchBooksError } from '../actions/root.action';

function fetchBooks() {
    return dispatch => {
        dispatch(fetchBooksPending());
        fetch(`http://localhost:2700/books`)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(fetchBooksSuccess(response));
                console.log(response)
                return response;
            })
            .catch(error => {
                dispatch(fetchBooksError(error));
            })
    }
}

export default fetchBooks;
