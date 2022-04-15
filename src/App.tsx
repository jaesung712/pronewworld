import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//admin

//user
import SignInPage from './user/signin';

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/*admin*/}
        
        {/*user*/}
        <Route path={"/"} element={<SignInPage/>} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App;
