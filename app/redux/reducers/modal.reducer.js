import {USER_LOGIN_MODAL, CLOSE_USER_MODAL, 
    USER_SIGNUP_MODAL, USER_SIGNUP, USER_INPUT, USER_LOGIN} from "../actions/action.types";
  
  const  INITIAL_STATE ={
      showLoginModal :false,
      showSignUpModal: false,
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
        case USER_INPUT:
        return { ...state, [action.prop]: action.value};
        case USER_SIGNUP_MODAL:
        return { ...state, showSignUpModal: true, modalOpen:true  };
        case USER_LOGIN_MODAL:
        return { ...state, showSignUpModal: false, showLoginModal:true };
        case USER_SIGNUP:
        case USER_LOGIN:
        case CLOSE_USER_MODAL:
        return { ...INITIAL_STATE };
      default:
        return state;
    }
  }