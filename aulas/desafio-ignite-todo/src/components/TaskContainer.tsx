import styles from "./TaskContainer.module.css";
import ClipBoardImg from '../assets/Clipboard.svg';

export function TaskContainer() {
  return (
    <>
      
      <div className={styles.container}>
        <img src={ClipBoardImg} alt="" />
        <h3> Você ainda não tem tarefas cadastradas</h3>
        <h4>Crie tarefas e organize seus itens a fazer</h4>
      </div>
    </>


  );
}

