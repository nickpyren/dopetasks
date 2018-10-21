import React, { Component } from 'react';
import TaskList from './components/tasks/task-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskList></TaskList>
      </div>
    );
  }
}

export default App;
