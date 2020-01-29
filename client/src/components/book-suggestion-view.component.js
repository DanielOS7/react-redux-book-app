import React, { useState, useEffect } from 'react';

function BookSuggestion() {

    let [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:2700/books`);
            const responseData = await response.json();
            setBooks(responseData);
        }
        fetchData();
    }, []);

    return (
        <div>
            <button onClick={() => { console.log(books) }}>Log Data</button>
        </div>
    );
}

export default BookSuggestion;
