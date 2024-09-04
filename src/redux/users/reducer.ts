import { ACTION_TYPES } from "./action-types";
import { ActionTypes, AppStateTypes } from "./types";

const initState: AppStateTypes = {
  users: [],
  filteredUsers: [],
  searchFilter: "",
};

const usersReducer = (state = initState, action: ActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.GET_USERS:
      return { ...state, users: payload, filteredUsers: payload };
    case ACTION_TYPES.INPUT_VALUE:
      return { ...state, searchFilter: payload };
    case ACTION_TYPES.SET_FILTERED_USERS:
      return { ...state, filteredUsers: payload };
    default:
      return state;
  }
};

export default usersReducer;
