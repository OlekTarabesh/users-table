import { useDispatch } from "react-redux";

import searchIcon from "../../assets/search.svg";
import { searchFilterAction } from "../../redux/users/actions";
import { AppThunkDispatch } from "../../redux/users/types";

import styles from "./styles.module.scss";

const Header = () => {
  const dispatch: AppThunkDispatch = useDispatch();

  return (
    <header className={styles.wrapper}>
      <span className={styles.title}>Users</span>
      <div className={styles.searchContainer}>
        <img src={searchIcon} alt="" className={styles.searchIcon} />
        <input
          type="search"
          className={styles.search}
          placeholder={"Search users..."}
          onChange={(e) => dispatch(searchFilterAction(e.target.value))}
        />
      </div>
    </header>
  );
};

export default Header;
