import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/the-one-who-knoccks.png",
      name: "Thiago Alves",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "E aí Galera! 👋" },
      {
        type: "paragraph",
        content:
          "Mais um projeto upado no meu portifólio. É um projeto que fiz no NLW eSports, evento da Rocketseat.",
      },
      {
        type: "link",
        content: "👉 https://github.com/the-one-who-knoccks/NLW-eSports",
      },
    ],
    publishedAt: new Date("2022-09-24 22:15:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Ceo @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "E aí Galera! 👋" },
      {
        type: "paragraph",
        content:
          "Mais um projeto upado no meu portifólio. É um projeto que fiz no NLW eSports, evento da Rocketseat.",
      },
      {
        type: "link",
        content: "👉 https://github.com/the-one-who-knoccks/NLW-eSports",
      },
    ],
    publishedAt: new Date("2022-09-23 22:10:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
