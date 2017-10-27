import * as types from './actionTypes';
import axios from 'axios';
import { API_AUTHENTICATE, API_GET_CURRENT_USER } from '../config/apiConfig';
//=========================Helpers==============================================

function setSessionItem(item, value) {
  sessionStorage.setItem(item, value);
}

//=========================Login================================================
export function loginUser(creds) {
  return function(dispatch) {
    return axios({
      method: 'POST',
      url: `${process.env.REACT_APP_SERVICE_URL}/${API_AUTHENTICATE}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        userName: creds.userName,
        password: creds.password,
      },
    })
      .then(function(response) {
        if (response.status === 200) {
          const { jwt } = response.data;
          setSessionItem('jwt', jwt);
        } else {
          const message =
            'Username or Password is incorrect. Please try again.';
          dispatch(createErrorMessage(message));
        }
      })
      .catch(function(error) {
        if (error.response === undefined) {
          const message = 'Service is unavailable. Please try after some time.';
          dispatch(createErrorMessage(message));
        } else {
          const message =
            'Username or Password is incorrect. Please try again.';
          dispatch(createErrorMessage(message));
        }
      });
  };
}

export function getCurrentUser() {
  return function(dispatch) {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVICE_URL}/${API_GET_CURRENT_USER}`,
      headers: {
        Authorization: sessionStorage.getItem('jwt'),
        'Content-Type': 'application/json',
      },
    })
      .then(function(response) {
        if (response.status === 200) {
          const { user } = response.data;
          setSessionItem('user', JSON.stringify(user));
          dispatch(authSuccess(user));
        } else {
          debugger;
          dispatch(currentUserFailure());
          const message = 'Error while fetching user details.';
          dispatch(createErrorMessage(message));
        }
      })
      .catch(function() {
        dispatch(currentUserFailure());
        const message = 'Error while fetching user details.';
        dispatch(createErrorMessage(message));
      });
  };
}

export function authRequest() {
  return { type: types.AUTH__REQUEST };
}

export function authSuccess(user) {
  return { type: types.AUTH__SUCCESS, user };
}

// export function authFailure() {
//   return { type: types.AUTH__FAILURE };
// }

export function currentUserSuccess(user) {
  return { type: types.CURRENT_USER__SUCCESS, user };
}

export function createErrorMessage(message) {
  return { type: types.FLASH_MESSAGE__FAILURE, message };
}

export function currentUserFailure() {
  return { type: types.CURRENT_USER__FAILURE };
}
