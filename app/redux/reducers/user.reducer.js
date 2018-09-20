import createHistory from 'history/createBrowserHistory';
const history = createHistory();
import {FETCH_USERS,VERIFY_USER,
  VERIFY_USER_ERROR, FETCH_USERS_ERROR, USER_LOGIN, USER_SIGNUP,USER_SIGNUP_ERROR, USER_LOGIN_ERROR   } from "../actions/action.types";

const  INITIAL_STATE ={
    user :[],
    isSignUp: false,
    email:'',
    password:'',
    name:'',
    loader: false,
    modalOpen:false,
    errorMsg:'',
    password:'',
    loginSuccess:false

}


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_USERS:
        if (action.tabIndex === 1) {
          return { ...state, user: action.payload, tabIndex:action.tabIndex };
        }
        return { ...state, tabIndex:action.tabIndex };
      case FETCH_USERS_ERROR :
      case USER_LOGIN_ERROR :
      case USER_SIGNUP_ERROR :
      case VERIFY_USER_ERROR:
        return { ...INITIAL_STATE, errorMsg:action.errorMsg, loader: false};
        case USER_SIGNUP:
        return { ...state, user:action.payload, loader: false, loginSuccess:true};
        case USER_LOGIN:
        history.push('/dashboard');
        return { ...state, user:action.payload.user, loader: false, loginSuccess:true};
        case VERIFY_USER:
        return { ...state, user:action.payload.user, loginSuccess:true};
        case USER_SIGNUP :
        return { ...state};
      default:
        return state;
    }
  }