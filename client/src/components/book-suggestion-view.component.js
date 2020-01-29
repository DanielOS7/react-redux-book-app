import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchBooks from '../services/fetchBooks.service';

function BookSuggestion(props) {

    const bookSuggestion = useSelector(state => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    return (
        <div>
            <button onClick={() => { console.log(bookSuggestion.books) }}>Log Data</button>
            <button onClick={() => { console.log(props) }}>Log Props</button>
        </div>
    );
}

const getBooksPending = state => state.isFetching;
const getBooks = state => state.books;
const getBooksError = state => state.error;

const mapStateToProps = state => ({
    error: getBooksError(state),
    books: getBooks(state),
    pending: getBooksPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBooksAction: fetchBooks
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookSuggestion);
