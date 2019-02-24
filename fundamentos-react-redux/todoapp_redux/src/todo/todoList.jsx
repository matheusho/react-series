import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from '../template/iconButton';
import { changeDone, destroy } from './todoActions';

const TodoList = props => {
  const renderRows = () => {
    let list = props.list || [];
    return list.map((todo, i) => (
      <tr key={todo._id}>
        <td className={todo.done ? '-has-done' : ''}>{todo.description}</td>
        <td>
          <IconButton
            style="success"
            icon="check"
            hide={todo.done}
            onClick={() => props.changeDone(todo)}
          />
          <IconButton
            style="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.changeDone(todo)}
          />
          <IconButton
            style="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => props.destroy(todo)}
          />
        </td>
      </tr>
    ));
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th className="table-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
};

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDone, destroy }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);