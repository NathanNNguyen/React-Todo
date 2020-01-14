import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { todoes } from './components/TodoComponents/data';
import './App.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      action: 'cc',
      todoList: todoes
    };
    // this.clearCompleted = this.clearCompleted.bind(this);
  };
  toggleItem = id => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    // update todoList
    this.setState({
      ...this.state,
      todoList: newTodoList
    });
  };

  addTodo = todoText => {
    const newTodo = {
      name: todoText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  // to clear the completed tasks, we keep the task that's uncompleted, then update the state so that we get a new listing with uncompleted tasks
  // think react as to update states instead of making UI
  clearCompleted = () => {
    const uncompletedTodoes = this.state.todoList.filter(todo => todo.completed === false);
    this.setState({
      ...this.state,
      todoList: uncompletedTodoes
    })

  };

  render() {
    return (
      <div className='flex'>
        <h2>Todo Lists</h2>
        <TodoForm addTodo={this.addTodo} />

        <TodoList
          todoes={this.state.todoList}
          toggleItem={this.toggleItem}
        />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
