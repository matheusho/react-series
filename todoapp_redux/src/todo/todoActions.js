import axios from 'axios';

const URL = 'https://perfect-orange.glitch.me/api/todos';

export const handleChange = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
});

export const search = () => {
  return (dispatch, getState) => {
      const description = getState().todo.description;
      const search = description ? `&description__regex=/${description}/` : '';

      axios.get(`${URL}?sort=-createdAt${search}`)
        .then((response) => dispatch({ type: 'TODO_SEARCHED', payload: response.data }));
    };
};

export const add = (description) => {
  return dispatch => {
    axios.post(URL, { description })
      .then(response => dispatch(clear()))
      .then(response => dispatch(search()));
  };
};

export const changeDone = todo => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { done: ! todo.done })
      .then(response => dispatch(search()));
  };
};

export const destroy = todo => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
      .then(response => dispatch(search()));
  }
}

export const clear = () => {
  return [
    { type: 'TODO_CLEAR' },
    search()
  ];
}