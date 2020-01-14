import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: '',
    };
  }

  handleChange = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({ todoText: '' })
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          name="todoText"
          value={this.state.todoText}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoForm;
