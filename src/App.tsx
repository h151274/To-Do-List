import React, { Component } from 'react';
import './App.css';
import {ListForm} from './ListForm'
import {List} from './List'
import { Task } from './Task';

interface State {
  newTask: Task;
  list: Task[];
}

class App extends Component< {}, State> {
  state: State = {
    newTask: {
      id: 4,
      element: ""
    },
    list:[{id: 1, element: 'Learn React'},
          {id: 2, element: 'Test'},
          {id: 3, element: 'Make app'}]
  };

 addTask = () => {
    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        element: ""
      },
      list: [...previousState.list, previousState.newTask]
    }));
  };

  handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        element: event.target.value
      }
    });
  };

  deleteTask = (taskToDelete: Task) => {
    this.setState(previousState => ({
      list: [
        ...previousState.list.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };

  render() {
    return (
      <div>
        <h1>To Do List! </h1>
        <ListForm
          task={this.state.newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
        />
        <List list={this.state.list} onDelete={this.deleteTask} />
      </div>
    );
  }
}
export default App