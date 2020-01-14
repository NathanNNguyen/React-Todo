import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div>
      {props.todoes.map((item, index) => (
        <Todo key={index} item={item} toggleItem={props.toggleItem} />
      ))}
    </div>
  );
};

export default TodoList;
