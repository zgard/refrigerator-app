import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FullPageIntroWithFixedNavbar from './components/FullPageIntroWithFixedNavbar';
import Dashboard from './components/Dashboard';
// import LoginModal from './components/LoginModal' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
