import React, {Component} from 'react';

import api from '../../services/api'

class Todos extends Component{

  state = {
    todos: []
  }

  async componentDidMount(){
    const { id } = this.props.match.params;
    const response = await api.get(`/todos?userId=${id}`);
    this.setState({todos: response.data})
    console.log(response);
  }

  render(){
    return(
      <ul className="collection with-header">
        <li className="collection-header"><h4>Todos</h4></li>
        {this.state.todos.map(todo => (
          <li key={todo.id} className="collection-item">{todo.title}<span data-badge-caption="" className={`new badge ${todo.completed? '':'red'}`}>Completed ?</span></li>

        ))}
      </ul>
    );
  }

}

export default Todos;
