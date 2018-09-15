import { combineReducers} from "redux";
import { userReducer, modalReducer  } from "./redux/reducers/index";

const configureStore = combineReducers({
  users: userReducer,
  modals: modalReducer 
});
export default configureStore;
