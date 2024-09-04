import { useSelector } from "react-redux";

import UsersList from "../users-list/UsersList";
import Header from "../header/Header";
import Titles from "../titles/Titles";

import { AppStateTypes, UsersTypes } from "../../redux/users/types";

import styles from "./styles.module.scss";

type ReducerTypes = {
  usersReducer: AppStateTypes;
};

const UsersBoard = () => {
  const { filteredUsers } = useSelector(
    ({ usersReducer }: ReducerTypes) => usersReducer
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <div className={styles.titles}>
        <Titles />
      </div>
      <div className={styles.userList}>
        {filteredUsers?.map((user: UsersTypes) => (
          <UsersList key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersBoard;
