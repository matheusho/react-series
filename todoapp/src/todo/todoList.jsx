import React from 'react';
import IconButton from '../template/iconButton';

export default props => {

  const renderRows = () => {
    let list = props.list || [];
    return list.map((todo, i) => (
      <tr key={todo._id}>
        <td className={todo.done ? 'text-muted' : ''}>{todo.description}</td>
        <td>
          <IconButton
            style="success"
            icon="check"
            onClick={() => props.handleMarkAsDone(todo)}
          />
          <IconButton
            style="warning"
            icon="undo"
            onClick={() => props.handleMarkAsPending(todo)}
          />
          <IconButton
            style="danger"
            icon="trash-o"
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
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
};