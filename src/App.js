import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Route, Switch, Link } from 'react-router-dom';
import ShopPage from './pages/shopepage/shopage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component';
import { auth } from './firebase/firebase-utilities';

const ContactPage = () => (
  <div>
    <h1>Contact Page</h1>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentUser : null
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser : user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
    );
  }
}
export default App;
