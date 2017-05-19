import React from 'react';
import IconButton from '../template/iconButton';

export default props => {
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
            onClick={() => props.handleMarkAsDoneOrPending(todo)}
          />
          <IconButton
            style="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.handleMarkAsDoneOrPending(todo)}
          />
          <IconButton
            style="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => props.handleDestroy(todo)}
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