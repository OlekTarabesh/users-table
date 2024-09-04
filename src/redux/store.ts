import { applyMiddleware, legacy_createStore as createStore } from "redux";

import { rootReducer } from "./rootReducer";
import { thunk, ThunkMiddleware } from "redux-thunk";
import { AppActionsTypes, AppStateTypes } from "./users/types";

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk as ThunkMiddleware<AppStateTypes, AppActionsTypes>)
);

export { store };
