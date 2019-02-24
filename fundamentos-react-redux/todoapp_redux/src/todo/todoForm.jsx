import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { handleChange, search, add, clear } from './todoActions';

class TodoForm extends Component {
  constructor(props) {
    super();

    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  keyHandler(e) {
    const { search, add, description, clear } = this.props;

    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description);
    } else if (e.key === 'Escape') {
      clear();
    }
  }

  render() {
    const { handleChange, search, add, description, clear } = this.props;

    return (
      <div role="form" className="todo-form row">
        <Grid cols="12 9 10">
          <input
            type="text"
            placeholder="Adicione uma tarefa"
            id="description"
            className="form-control"
            value={description}
            onChange={handleChange}
            onKeyUp={this.keyHandler}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton
            style="primary"
            icon="plus"
            onClick={() => add(description)}
          />
          <IconButton
            style="info"
            icon="search"
            onClick={search}
          />
          <IconButton
            style="default"
            icon="close"
            onClick={clear}
          />
        </Grid>
      </div>
    );
  }
};

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleChange, search, add, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);