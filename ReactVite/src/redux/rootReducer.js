import { combineReducers } from "redux";
import reducer from "./reducer";
const rootReducer = combineReducers({
  count: reducer,
});

export default rootReducer;
