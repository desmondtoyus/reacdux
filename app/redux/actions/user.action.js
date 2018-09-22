import axios from 'axios';
import { FETCH_USERS, USER_LOGIN_MODAL, CLOSE_USER_MODAL, USER_INPUT, VERIFY_USER,
  VERIFY_USER_ERROR,
  USER_SIGNUP_MODAL,  FETCH_USERS_ERROR, USER_LOGIN, USER_SIGNUP, USER_SIGNUP_ERROR, USER_LOGIN_ERROR   } from "./action.types";

// Authenticated Routes
  export const listUsers = (value) => dispatch => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
      axios.get(`api/user`)
        .then(response => {
          dispatch({type: FETCH_USERS, payload: response.data});
        })
        .catch(err => {
          console.log(err);
        })

  }

  export const verifyUsers = (data) => dispatch => {
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
      axios.post(`api/auth/verify`, data)
        .then(response => {
          dispatch({type: VERIFY_USER, payload: response.data});
        })
        .catch(err => {
          console.log(err);
          dispatch({type: VERIFY_USER_ERROR, payload: err});
        })

  }

  export const signUp =(data) =>dispatch=>{
    axios.post(`api/auth/register`, data)
    .then(response=>{
      localStorage.setItem('jwtToken', response.data.password);
      dispatch({type: USER_SIGNUP, payload: response.data});
    })
    .catch(err=>{
      dispatch({type: USER_SIGNUP_ERROR, payload:'Sign In Error' });
    })
  }

  export const signIn  = (data) => dispatch => {
    axios.post(`api/auth/login`, data) 
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

 