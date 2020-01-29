import React from 'react';

function BookSuggestionList(props) {
    return (
        <div>
            <button onClick={() => { console.log(props.books) }}>NEWWWWW</button>
        </div>
    );

}

export default BookSuggestionList;
