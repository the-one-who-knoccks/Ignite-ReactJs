import { FormEvent, useState, useEffect, ChangeEvent, InvalidEvent } from 'react';

import "./global.css";
import styles from './App.module.css';

import { Header } from "./components/Header";

import { v4 as uuid } from 'uuid';
import { Task } from './components/Task';
import { TaskContainer } from './components/TaskContainer';
import { PlusCircle } from 'phosphor-react';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: 'Estudar o Ignite',
      isComplete: false,
    },

    {
      id: uuid(),
      title: "Estudar react",
      isComplete: false
    }
  ])

  const [newTask, setNewTask] = useState('');
  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: uuid(),
        title: newTask,
        isComplete: false,
      }
    ])

    setNewTask('');
  }
  



  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleInvalidComment(event: InvalidEvent<HTMLTextAreaElement> ) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function deleteTask(id: any) {
    const taskList = tasks.filter(task => task.id !== id);

    setTasks(taskList);
  }

  function handleToggleTaskCompletion(id: string) {
    const taskList = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });

    setTasks(taskList);
  }

  const completes = tasks.filter(task => {
    return task.isComplete !== false
  })



  return (
    <>
      <Header />
      <div className={styles.wrapper}>
      <form onSubmit={handleNewTask}>
        <div className={styles.addTask}>
          <textarea
            required
            value={newTask}
            onChange={handleNewTaskChange}
            onInvalid={handleInvalidComment}
            className={styles.input}
            placeholder="Adicione uma nova tarefa..."
          />

          <button
            type="submit"
            className={styles.button}>
            Criar
            <PlusCircle size={18} />
          </button>
        </div>

        <header className={styles.taskWrapper}>
            <div className={styles.createdTasks}>
              <p>Tarefas criadas</p>
              <span>{tasks.length}</span>
            </div>

            <div className={styles.concludedTasks}>
              <p>Concluídas</p>
              <span>{completes.length} de {tasks.length}</span>
            </div>
          </header>

      </form>

     
      
      </div>
      {tasks.map((task) => {
          if (tasks.length > 0) {
            return (
              <Task
                handleToggleTaskCompletion={handleToggleTaskCompletion}
                id={task.id}
                isComplete={task.isComplete}
                onDeleteTask={deleteTask}
                key={task.id}
                title={task.title}
                task={task}
              />
            )
          }
        })}

        <div>
          {tasks.length === 0 &&
           <TaskContainer />
          }
        </div>

    </>
  )
}

export default App
