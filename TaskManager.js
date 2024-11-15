import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './style.css'

class TaskManager extends Component {
  state = {
    tasks: [
      { id: 1, text: 'Chapter-1', completed: false },
      { id: 2, text: 'Chapter-2', completed: false },
      { id: 3, text: 'Chapter-3', completed: false },
      { id: 4, text: 'Chapter-4', completed: false },
      { id: 5, text: 'Chapter-5', completed: false },
    ],
  };

  addTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, { id: Date.now(), text: task, completed: false }],
    });
  };

  toggleTaskCompletion = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    });
  };

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== taskId),
    });
  };

  render() {
    return (
      <div>
        <h1>Task Manager</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList 
          tasks={this.state.tasks} 
          toggleTaskCompletion={this.toggleTaskCompletion} 
          deleteTask={this.deleteTask} 
        />
      </div>
    );
  }
}

export default TaskManager;