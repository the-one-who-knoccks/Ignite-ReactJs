import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/the-one-who-knoccks.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Thiago Alves</strong>
            <span>Software Engineer</span>
          </div>
        </div>
        <time title="22 de Setembro às 09:26" dateTime="2022-09-22 09:26:39">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> E aí Galera! 👋</p>
        <p>
          Mais um projeto upado no meu portifólio. É um projeto que fiz no NLW
          eSports, evento da Rocketseat.
        </p>
        <p>
          👉{" "}
          <a
            target="_blank"
            href="https://github.com/the-one-who-knoccks/NLW-eSports "
          >
            github.com/the-one-who-knoccks/NLW-eSports{" "}
          </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"/>
        <footer>
        <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
