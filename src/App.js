import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MyAccount from './myaccount/MyAccount.js';

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
        </Container>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/myaccount' component={MyAccount} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
