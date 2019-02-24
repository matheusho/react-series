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
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMarkAsDoneOrPending = this.handleMarkAsDoneOrPending.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.refresh();
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : '';

    axios.get(`${URL}?sort=-createdAt${search}`)
      .then((response) => 
        this.setState({ ...this.state, description, list: response.data })
      );
  }

  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value });
  }

  handleAdd() {
    const description = this.state.description;

    axios.post(URL, { description })
      .then((response) => this.refresh());
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleMarkAsDoneOrPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: ! todo.done })
      .then((response) => this.refresh(this.state.description));
  }

  handleDestroy(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then((response) => this.refresh(this.state.description));
  }

  handleClear() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Todo" small="Manage tasks" />
        <TodoForm
          description={this.state.description}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleMarkAsDoneOrPending={this.handleMarkAsDoneOrPending}
          handleDestroy={this.handleDestroy}
        />
      </div>
    );
  }
}