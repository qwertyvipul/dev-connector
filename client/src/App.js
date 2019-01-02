import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {Provider} from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';

import './App.css';
import './static/css/main.css';

import {setCurrentUser, logoutUser} from './actions/authActions';
import { clearCurrentProfile, getCurrentProfile } from './actions/profileActions';

// Check for token
if(localStorage.jwtToken){
	// Set auth token header auth
	setAuthToken(localStorage.jwtToken);
	// Decode token and get user info and expiration
	const decoded = jwt_decode(localStorage.jwtToken);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	// Check for expired time
	const currenTime = Date.now() / 1000;
	if(decoded.exp < currenTime){
		// Logout user
		store.dispatch(clearCurrentProfile());
		store.dispatch(logoutUser());

		// Redirect to login
		window.location.href = '/login';
	}
}

class App extends Component {
render() {
	return (
		<Provider store={store}>
		<Router>
		<div className="App">
			<Navbar/>
			<div className="container">
				<Route exact path="/" component={Landing}/>
				<Route exact path="/register" component={Register}/>
				<Route exact path="/login" component={Login}/>
				<Switch><PrivateRoute exact path="/dashboard" component={Dashboard}/></Switch>
				<Switch><PrivateRoute exact path="/create-profile" component={CreateProfile}/></Switch>
			</div>
			<Footer/>
		</div>
		</Router>
		</Provider>
	);
}
}

export default App;
