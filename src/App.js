import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { todoes } from './components/TodoComponents/data';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: todoes
    }
  };
  toggleItem = id => {
    // find the item we clicked on
    // toggle the purchased field
    // update state with the new grocery data
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          finished: !item.finished
        };
      } else {
        return item;
      }
    });
    // update groceryList
    this.setState({
      todoList: newTodoList
    });
  };

  addTodo = todoText => {
    const newTodo = {
      name: todoText,
      id: Date.now(),
      finished: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  render() {
    return (
      <div>
        <h2>Todo Lists</h2>
        <TodoForm addTodo={this.addTodo} />
        
        <TodoList
          todoes={this.state.todoList}
          toggleItem={this.toggleItem}
        />

      </div>
    );
  }
}

export default App;
