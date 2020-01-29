  
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import BookSuggestion from './components/book-suggestion.component';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path={"/"} component={BookSuggestion} />
      </BrowserRouter>
    </div>
  );
}

export default App;
