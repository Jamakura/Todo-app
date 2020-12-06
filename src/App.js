import React from 'react';

import Header from './components/Header'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import './App.css';

class App extends React.Component {
  
  //will need a way to toggle completed
  //add item
  //clear Completed
  render() {
    return (
      <div className="App">
        <Header />
        <Todo />
        <TodoForm />
      </div>
  );
  }
}

export default App;
