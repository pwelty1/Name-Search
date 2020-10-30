import React from 'react';
import './App.css';
import { Router, Location, Redirect} from "@reach/router";

import Home from './pages/Home/Home';

function App() {
  return (
    <Location>
    {({location, navigate}) => (
      <>
        <Router location={location} navigate={navigate}>
          <Redirect from="/" to='/home' noThrow />
          <Home path='/home'/>
        </Router>
      </>
      )}
    </Location>
  );
}

export default App;
