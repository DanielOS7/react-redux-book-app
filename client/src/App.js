import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import BookSuggestionView from './components/book-suggestion-view.component';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path={"/"} component={BookSuggestionView} />
      </BrowserRouter>
    </div>
  );
}

export default App;
