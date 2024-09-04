import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import { ACTION_TYPES } from "./action-types";

export type UsersTypes = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type AppStateTypes = {
  users: UsersTypes[];
  filteredUsers: [];
  searchFilter: "";
};

export type SetUsersActionTypes = {
  type:
    | typeof ACTION_TYPES.GET_USERS
    | typeof ACTION_TYPES.SET_FILTERED_USERS
    | typeof ACTION_TYPES.INPUT_VALUE;
  payload: UsersTypes[] | string;
};

export type AppActionsTypes = SetUsersActionTypes;

export type ActionTypes = {
  type: string;
  payload: UsersTypes[];
};

export type AppThunkDispatch = ThunkDispatch<
  AppStateTypes,
  void,
  AppActionsTypes
>;
export type AppDispatchTypes = Action<string>;
