import React from 'react';
import Todo from './Todo';
import { todoes } from './data';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div>
      {todoes.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={props.clearFinished}>
        Clear finished
      </button>
    </div>
  );
};

export default TodoList;
