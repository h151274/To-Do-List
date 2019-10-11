import React, { StatelessComponent } from 'react'; 
import { Task } from "./Task";

export interface itemProps {
    task: Task;
    onDelete: (task: Task) => void;
  }

  export const ListElement: StatelessComponent<itemProps> = ({task,onDelete}) => {
    const onClick = () => {
      onDelete(task);
    };
  
    return (
      <li>
        {task.element} <button onClick={onClick}>X</button>
      </li>
    );
  };
