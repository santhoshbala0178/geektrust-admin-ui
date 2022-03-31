import { createStore, combineReducers } from "redux";
import { userDetailsReducer } from "./reducers/userDetailsReducer/userDetailsReducer";
import { pageDetailsReducer } from "./reducers/pageDetailsReducer/pageDetailsReducer";
import { userDeleteReducer } from "./reducers/userDeleteReducer/userDeleteReducer";

const rootReducer = combineReducers({
  userDetailsReducer,
  pageDetailsReducer,
  userDeleteReducer,
});
export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
