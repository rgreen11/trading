import React from 'react';
import Signup from './SignInLogin/signin/signup';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Signup} />

      </div>
    </BrowserRouter>
  );
}

export default App;
