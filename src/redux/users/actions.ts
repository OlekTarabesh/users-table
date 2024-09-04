import { Dispatch } from "redux";

import { getUsers } from "../../api/requests/getUsers";
import { ACTION_TYPES } from "./action-types";
import { AppDispatchTypes, SetUsersActionTypes } from "./types";
import { store } from "../store";

export const setUsersAction: () => (
  dispatch: Dispatch<SetUsersActionTypes>
) => Promise<void> = () => async (dispatch: Dispatch<SetUsersActionTypes>) => {
  const data = await getUsers();

  dispatch({ type: ACTION_TYPES.GET_USERS, payload: data });
};

export const searchFilterAction =
  (inputValue: string) => (dispatch: Dispatch<AppDispatchTypes>) => {
    dispatch({ type: ACTION_TYPES.INPUT_VALUE, payload: inputValue });

    const { users } = store.getState().usersReducer;

    const filteredUsers = users?.filter((item) =>
      Object.values(item).some((field) =>
        field.toString().toLowerCase().includes(inputValue.toLowerCase())
      )
    );

    dispatch({ type: ACTION_TYPES.SET_FILTERED_USERS, payload: filteredUsers });
  };
