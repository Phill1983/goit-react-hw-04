import styles from './ErrorMessage.module.css';

function ErrorMessage({ message }) {
  return <p className={styles.message}>{message}</p>;
}

export default ErrorMessage;