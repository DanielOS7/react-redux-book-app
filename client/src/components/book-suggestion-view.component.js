import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchBooks from './services/fetchBooks.service';
import BookSuggestionList from './book-suggestion-list.component';

function BookSuggestionView(props) {

    const bookSuggestion = useSelector(state => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    return (
        <div id="bookView">
            {props.books.error && <div>Error</div>}
            <BookSuggestionList books={bookSuggestion.books} />
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
)(BookSuggestionView);
