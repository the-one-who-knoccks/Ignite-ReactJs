import styles from "./Task.module.css";
import * as RadioGroup from '@radix-ui/react-radio-group';

export function Task() {
  return (
    <div className={styles.content}>
    <div className={styles.task}>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
    </div>
    </div>
  );
}