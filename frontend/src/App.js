import React from 'react';
import Signup from './SignInLogin/signin/signup';
import Login from './SignInLogin/login/login';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Signup} />
        <Route path='/login' exact component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
