import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <ClipLoader size={50} color="#36d7b7" />
    </div>
  );
}

export default Loader;
