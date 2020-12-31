import './App.css';
import './pages/homepage/homepage.component';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/notFound/notFound.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

interface props {
  setCurrentUser: Function;
}

interface state {
  currentUser: any;
}
class App extends React.Component<props, state> {

  unsubscribeFromAuth: { (): void; (): void; } = () => { };

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })

        })
      }
      else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
