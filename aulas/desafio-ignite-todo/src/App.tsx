import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import "./global.css";
import styles from './App.module.css';
import { Task } from "./components/Task";
import { TaskContainer } from "./components/TaskContainer";

function App() {

  return (
    <>
      <Header />
      <div className={styles.addTask}>
        <AddTask />
      </div>

      <TaskContainer/>
 
    </>
  )
}

export default App
