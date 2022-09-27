import styles from "./Header.module.css";
import Logo from '../assets/todo-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo tipo do ignite" />
    </header>
  );
}