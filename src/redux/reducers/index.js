import { combineReducers } from "redux";
import menuReducer from "./menu";

//Combine reducers
const indexReducer=combineReducers({
  menu: menuReducer,  
})

export default indexReducer