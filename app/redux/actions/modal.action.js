import axios from 'axios';
import {USER_LOGIN_MODAL, CLOSE_USER_MODAL, USER_LOGIN_ERROR,
    USER_SIGNUP_MODAL, USER_INPUT, USER_LOGIN } from "../actions/action.types";

// Authenticated Routes

  export const changeInput = ({ prop, value }) => dispatch => {
    dispatch({ type: USER_INPUT, prop, value });
  };

  export const signInModal  = () => dispatch => {
    dispatch({type: USER_LOGIN_MODAL});
  }

  export const signIn  = (data) => dispatch => {
    axios.post(`http://localhost:5000/api/auth/login`, data) 
      .then(response => {
        localStorage.setItem('jwtToken', response.data.token);
        dispatch({type: USER_LOGIN, payload: response.data});
      })
      .catch(err => {
        console.log(err);
        dispatch({type: USER_LOGIN_ERROR, payload:'Sign In Error' });
      })
  }
  export const logOut  = () => {
  localStorage.removeItem('jwtToken');
  window.location.reload();
  }

  export const  signUpModal = () => dispatch => {
    dispatch({type: USER_SIGNUP_MODAL});
  }

  export const  closeUserModal = () => dispatch => {
    dispatch({type: CLOSE_USER_MODAL});
  }