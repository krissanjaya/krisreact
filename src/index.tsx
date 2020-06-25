import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {mount, route} from 'navi';
import {Router} from 'react-navi';
import * as serviceWorker from './serviceWorker';
import LoginPage from './Auth/Loginpage';
import RegisterPage from './Auth/RegisterPage';
import {withAuthentication, withAuthenticationLogin} from './Auth/authenticatedRoute';
import HomePage from './Pages/Home/HomePage';
import {TOKEN} from './Auth/auth.api';

const routes = mount({
  "/": withAuthentication(route({
    title: 'Home',
    view: <HomePage/>
  })),
  "/login":withAuthenticationLogin(route({
    title: 'Login',
    view: <LoginPage/>
  })),
  "/register": route({
    title:'Register',
    view: <RegisterPage />
  })
})


ReactDOM.render(
    <Router routes={routes} context={{token:localStorage.getItem(TOKEN)}} />,
  document.getElementById('root')
);

serviceWorker.unregister();
