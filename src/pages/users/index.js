import  React, { Component } from 'react';

import {Link} from 'react-router-dom';

import api from '../../services/api';

export default class Users extends Component {

  state = {
    users: []
  }

  componentDidMount(){
    this.loadUsers();
  }

  loadUsers = async () => {
    const  respose = await api.get('/users');
    console.log(respose);

    this.setState({
      users: respose.data
    })
  }

  render(){
    return (
      <div className="row">
        {this.state.users.map(user => (
          <div key={user.id} className="col s12 m6">
            <div className="card ">
              <div className="card-content ">
                <span className="card-title">{user.name}</span>
                <p>ID: {user.id}</p>
                <p>User name: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>City: {user.address.city}</p>
              </div>
              <div className="card-action">
                <Link className="waves-effect waves-light btn " to={`/todos/${user.id}`}>Go todos</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
