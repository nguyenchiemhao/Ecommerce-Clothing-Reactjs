import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Route, Switch, Link } from 'react-router-dom';
import ShopPage from './pages/shopepage/shopage.component';
import Header from './components/header/header.component';

const ContactPage = () => (
  <div>
    <h1>Contact Page</h1>
  </div>
)



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
