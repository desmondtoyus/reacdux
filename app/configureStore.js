import { combineReducers} from "redux";
import { userReducer } from "./redux/reducers/index";

const configureStore = combineReducers({
  users: userReducer
});
export default configureStore;
