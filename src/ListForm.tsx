import React, { FunctionComponent } from "react";
import { Task } from "./Task";

interface formProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
    task: Task;
  }
  
  export const ListForm: FunctionComponent<formProps> = ({
    onChange,
    onAdd,
    task
  }) => (
    <div>
      <input placeholder='add a task' onChange={onChange} value={task.element} />
      <button type="submit" onClick={onAdd} >Add</button>
    </div>
  );
