import axios from 'axios';
import {USER_LOGIN_MODAL, CLOSE_USER_MODAL, USER_LOGIN_ERROR,
    USER_SIGNUP_MODAL, USER_INPUT, USER_LOGIN } from "../actions/action.types";

  export const changeInput = ({ prop, value }) => dispatch => {
    dispatch({ type: USER_INPUT, prop, value });
  };

  export const signInModal  = () => dispatch => {
    dispatch({type: USER_LOGIN_MODAL});
  }


  export const  signUpModal = () => dispatch => {
    dispatch({type: USER_SIGNUP_MODAL});
  }

  export const  closeUserModal = () => dispatch => {
    dispatch({type: CLOSE_USER_MODAL});
  }