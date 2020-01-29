import React from 'react';

function BookSuggestion() {

    fetch(`http://localhost:2700/books`)
        .then(response => response.json())
        .then(data => console.log(data))

    const greeting = 'Book Suggestion Component';
    return <h1>{greeting}</h1>;
}

export default BookSuggestion;
