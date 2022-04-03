import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userDetailsReducer } from "./reducers/userDetailsReducer/userDetailsReducer";
import { pageDetailsReducer } from "./reducers/pageDetailsReducer/pageDetailsReducer";
import { userDeleteReducer } from "./reducers/userDeleteReducer/userDeleteReducer";
import { userEditReducer } from "./reducers/userEditReducer/userEditReducer";

const rootReducer = combineReducers({
  userDetailsReducer,
  pageDetailsReducer,
  userDeleteReducer,
  userEditReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
