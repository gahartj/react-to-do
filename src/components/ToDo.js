import React,{ Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <div>
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
      </li>
      <button type="button" onClick={this.props.deleteTodo}>Delete Item</button>
      </div>
    );
  }
}

export default ToDo;
