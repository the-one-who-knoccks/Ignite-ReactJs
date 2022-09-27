import styles from "./AddTask.module.css";
import { PlusCircle } from 'phosphor-react';

import ClipBoardImg from '../assets/Clipboard.svg';

export function AddTask() {

  function teste() {
    return console.log('teste')
  }
  return (
    <div>
      <form onSubmit={() => { }} >
        <div className={styles.input}>
          <textarea
            name="task"
            placeholder="Adicione uma nova tarefa"
            // onChange={handleNewCommentChange}
            // value={newCommentText}
            // onInvalid={handleInvalidComment}
            required
          />

          <button onClick={() => teste()} type="submit" >
            Criar
            <PlusCircle size={18} />
          </button>
        </div>
      </form>
      <div className={styles.counter}>
        <div>
          <p className={styles.createdTasks}>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div>
          <p className={styles.concludedTasks}>Concluídas</p>
          <span>0</span>
        </div>
      </div>

    </div>

  );
}