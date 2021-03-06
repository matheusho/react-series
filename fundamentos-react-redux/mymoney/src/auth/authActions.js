import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import constants from '../constants';

export const login = (values) => {
	return submit(values, `${constants.OAPI_URL}/login`);
};

export const signup = (values) => {
	return submit(values, `${constants.OAPI_URL}/signup`);
};

export const submit = (values, url) => {
	return (dispatch) => {
		axios.post(url, values)
			.then((resp) => {
				dispatch([
					{ type: 'USER_FETCHED', payload: resp.data }
				])
			})
			.catch((error) => {
				error.response.data.errors.forEach(err => toastr.error('Erro', err));
			});
	}
};

export const logout = () => {
	return { type: 'TOKEN_VALIDATED', payload: false };
};

export const validateToken = (token) => {
	return (dispatch) => {
		if (token) {
			axios.post(`${constants.OAPI_URL}/validate-token`, { token })
				.then((resp) => {
					dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid });
				})
				.catch((error) => dispatch(logout()));
		} else {
			dispatch(logout());
		}
	};
};
