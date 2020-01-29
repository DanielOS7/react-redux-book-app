export const fetchBooksPending = () => {
    return {
        type: 'FETCH_BOOKS_PENDING'
    }
}

export const fetchBooksSuccess = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        books: books
    }
}

export const fetchBooksError = (error) => {
    return {
        type: 'FETCH_BOOKS_ERROR',
        error: error
    }
}
