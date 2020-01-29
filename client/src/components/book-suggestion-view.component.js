import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../actions/root.action'

function BookSuggestion() {

    let [books, setBooks] = useState([]);
    const bookSuggestion = useSelector(state => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks())
        // async function fetchData() {
        //     const response = await fetch(`http://localhost:2700/books`);
        //     const responseData = await response.json();
        //     setBooks(responseData);
        // }
        // fetchData();
    }, []);

    return (
        <div>
            <button onClick={() => { console.log(bookSuggestion.books) }}>Log Data</button>
        </div>
    );
}

export default BookSuggestion;import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../actions/root.action'

function BookSuggestion() {

    let [books, setBooks] = useState([]);
    const bookSuggestion = useSelector(state => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks())
        // async function fetchData() {
        //     const response = await fetch(`http://localhost:2700/books`);
        //     const responseData = await response.json();
        //     setBooks(responseData);
        // }
        // fetchData();
    }, []);

    return (
        <div>
            <button onClick={() => { console.log(bookSuggestion.books) }}>Log Data</button>
        </div>
    );
}

export default BookSuggestion;
