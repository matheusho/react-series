import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'https://perfect-orange.glitch.me/api/todos';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', list: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);

    this.refresh();
  }

  refresh() {
    axios.get(`${URL}?sort=-createdAt`)
      .then((response) => 
        this.setState({ ...this.state, description: '', list: response.data })
      );
  }

  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value });
  }

  handleClick() {
    const description = this.state.description;

    axios.post(URL, { description })
      .then((response) => this.refresh());
  }

  handleDestroy(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then((response) => this.refresh());
  }

  render() {
    return (
      <div>
        <PageHeader name="Todo" small="Manage tasks" />
        <TodoForm
          value={this.state.description}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <TodoList
          list={this.state.list}
          handleDestroy={this.handleDestroy}
        />
      </div>
    );
  }
}