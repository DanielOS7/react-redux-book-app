import React from 'react';
import Card from 'react-bootstrap/Card';
import './css/book-suggestion-list.css';

function BookSuggestionList(props) {
    return (
        <div>
            <div className="container">
                <h3 style={{ marginBottom: "15px" }}>Books You Might Like</h3>
                <div className="row">
                    {props.books.map(books => {
                        return (
                            <div className="col col-sm-4 col-md-3 col-lg-2 col-xl-2" key={books.id}>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={`https://www.mylocation.com/${books.Location}/${books.Cover}`} />
                                    <Card.Body>
                                        <Card.Title>{books.Title}</Card.Title>
                                        <Card.Text>{books.Contributor}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

}

export default BookSuggestionList;
