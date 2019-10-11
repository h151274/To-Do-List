import { Task } from "./Task";
import { ListElement } from "./ListElement";
import React, { StatelessComponent } from "react";

export interface listProps {
    list: Task[];
    onDelete: (task: Task) => void;
  }

  export const List: StatelessComponent<listProps> = ({list,  onDelete}) => (
    <div>
      {list.map(task => (<ListElement task={task} onDelete={onDelete}/>))}
    </div>
  );