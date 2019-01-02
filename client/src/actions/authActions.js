import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {TEST_DISPATCH} from './types';
import {GET_ERRORS, SET_CURRENT_USER} from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {

    axios.post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }) 
    );

    // console.log(newUser);

    // return{
    //     type: TEST_DISPATCH,
    //     payload: userData
    // };
}

// Login - Get User Token
export const loginUser = userData => dispatch => {
    axios.post('/api/users/login', userData)
    .then(res => {
        // Save the token to local storage
        const {token} = res.data;
        // Set token to local storage
        localStorage.setItem('jwtToken', token);
        // Set token to auth header
        setAuthToken(token);
        // Decode token to get iser data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// Log out user
export const logoutUser = () => dispatch => {
    // Remove token from the local storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future headers
    setAuthToken(false);
    // Set the current user {} which will also set to isAuthenticated to false
    dispatch(setCurrentUser({}));
}