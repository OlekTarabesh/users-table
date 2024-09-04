import { memo } from "react";

import { UsersTypes } from "../../redux/users/types";

import styles from "./styles.module.scss";

type UserTypes = {
  user: UsersTypes;
};

const UsersList = memo(({ user }: UserTypes) => {
  return (
    <ul className={styles.wrapper}>
      <li>{user.name}</li>
      <li>{user.username}</li>
      <li>{user.email}</li>
      <li>{user.phone}</li>
    </ul>
  );
});

export default UsersList;
