import styles from './loading.module.scss';
import { LoadingText } from './loading-text/loading-text'

export function Loading() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Loading ! (with loading text)</h1>
      <LoadingText />
    </div>
  );
}

export default Loading;
