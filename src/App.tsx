import { useEffect } from "react";
import UsersBoard from "./components/users-board/UsersBoard";
import { useDispatch } from "react-redux";

import { setUsersAction } from "./redux/users/actions";
import { AppThunkDispatch } from "./redux/users/types";

import styles from "./app.module.scss";

function App() {
  const dispatch: AppThunkDispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsersAction());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <UsersBoard />
    </div>
  );
}

export default App;
