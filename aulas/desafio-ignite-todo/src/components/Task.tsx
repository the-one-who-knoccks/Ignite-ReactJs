import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { Check } from 'phosphor-react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import {  blackA } from '@radix-ui/colors';
import { styled } from '@stitches/react';


const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'transparent',
  border: '2px solid #4EA8DE',
  borderRadius: 20,
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,


});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  backgroundColor: '#5E60CE',
  border: '2px solid #5E60CE',
  borderRadius: 20,
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

});

// Exports
export const Checkbox = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;


interface Task {
    id: string;
    title: string;
    isComplete: boolean;
}
    interface Props extends Task {
      task: Task;
      onDeleteTask: (task: string) => void;
      handleToggleTaskCompletion: (task: string) => void;
    }



export const Task = ({isComplete, onDeleteTask, task, handleToggleTaskCompletion }: Props) => {
  return (
    <>
      <ul className={styles.content}>
      <li className={isComplete ? styles.listComplete : styles.list}>
          <div className={styles.checkBox}>
            <Checkbox
              defaultChecked={task.isComplete}
              onClick={() => handleToggleTaskCompletion(task.id)}
              id="c1">
              <CheckboxIndicator>
                <Check />
              </CheckboxIndicator>
            </Checkbox>
          </div>
          <div className={isComplete ? styles.textLine : styles.text}>
          <label>
              {task.title}
            </label>
          </div>
          <div className={styles.trashIcon}>
            <button
              onClick={() => onDeleteTask(task.id)}
              type='button'
            >
              <Trash size={24} />
            </button>
          </div>
        </li>
      </ul>
    </>

  )
}