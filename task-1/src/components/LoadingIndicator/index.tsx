import LoadingIcon from "../../icons/LoadingIcon";
import styles from "./styles.module.scss"

const LoadingIndicator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <LoadingIcon />
      </div>
      <div className={styles.text}> Loading data</div>
    </div>
  );
};

export default LoadingIndicator;
