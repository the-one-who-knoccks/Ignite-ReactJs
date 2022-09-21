import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Thiago Alves"
            content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          />

          <Post
            author="Diego Fernandes"
            content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          />
          <Post />
        </main>
      </div>
    </>
  );
}
