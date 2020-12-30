import './App.css';
import './pages/homepage/homepage.component';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/notFound/notFound.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp.component'
import { auth } from './firebase/firebase.utils'; 
import React from 'react';

interface props {

}

interface state {
  currentUser: any;
}
class App extends React.Component<props, state> {

  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth: { (): void; (): void; } = () => {};

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path ='/signin' component={SignInAndSignUp} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
