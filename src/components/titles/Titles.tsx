import styles from "./styles.module.scss";

const headerNames = ["Name", "Username", "Email", "Phone"];

const Titles = () => {
  return (
    <div className={styles.headerWrapper}>
      {headerNames.map((item, i) => (
        <div key={i} className={styles.header}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Titles;
