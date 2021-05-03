import { combineReducers } from "redux";
import AuthReducer from "./auth";
import ApplicationReducer from "./application";
import HomeReducer from "./home";

export default combineReducers({
  auth: AuthReducer,
  application: ApplicationReducer,
  home: HomeReducer
});
