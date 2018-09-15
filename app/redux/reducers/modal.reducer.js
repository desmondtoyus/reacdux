import {USER_LOGIN_MODAL, CLOSE_USER_MODAL, 
    USER_SIGNUP_MODAL, USER_SIGNUP, USER_INPUT, USER_LOGIN, USER_LOGIN_ERROR, USER_SIGNUP_ERROR,VERIFY_USER, VERIFY_USER_ERROR } from "../actions/action.types";
  
  const  INITIAL_STATE ={
      showLoginModal :false,
      tabIndex :0,
      isSignUp: false,
      email:'',
      password:'',
      name:'',
      loader: false,
      modalOpen:false,
      errorMsg:'',
      password:''
  }

  export default function(state = INITIAL_STATE, action) {
    switch(action.type) {

      case USER_LOGIN_ERROR :
      case USER_SIGNUP_ERROR :
      case VERIFY_USER_ERROR:
        return { ...INITIAL_STATE, errorMsg:action.errorMsg, loader: false,};
        case USER_LOGIN:
        return { ...state, user:action.payload.user,loader: false};
        case VERIFY_USER:
        return { ...state, user:action.payload.user};
        case USER_INPUT:
        return { ...state, [action.prop]: action.value};
        case USER_SIGNUP :
        return { ...state};
        case USER_SIGNUP_MODAL:
        return { ...state, isSignUp: true, modalOpen:true  };
        case USER_LOGIN_MODAL:
        return { ...state, isSignUp: false, showLoginModal:true };
        case CLOSE_USER_MODAL:
        return { ...state, isSignUp: false, modalOpen:false };
      default:
        return state;
    }
  }