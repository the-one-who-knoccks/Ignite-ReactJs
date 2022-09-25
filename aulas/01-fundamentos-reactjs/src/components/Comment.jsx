import {Trash, HandsClapping } from "phosphor-react";
import React, { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);



function handleDeleteComment() {
  onDeleteComment(content);
}

function handleLikeComment() {
  setLikeCount((state) => {
    return state + 1
  });
}

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/the-one-who-knoccks.png" alt=""  />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Alves</strong>
              <time
                title="22 de Setembro às 09:26"
                dateTime="2022-09-22 09:26:39"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button 
            onClick={handleDeleteComment}
            title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping size={15} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
