import { action, thunk } from 'easy-peasy';
import axios from 'axios';
import { URL } from '../constants/API';

let headers = {
	Accept: 'application/json',
	'Content-type': 'application/json',
};

export const userData = {
	user: null,

	loginUser: thunk((actions, payload) => {
		axios({
			url: `${URL}user/login`,
			method: 'POST',
			withCredentials: true,
			headers: headers,
			data: JSON.stringify(payload),
		})
			.then((res) => actions.setUser(res.data))
			.catch((error) =>
				Promise.reject({ error: error, response: error.response.data || {} })
			);
	}),

	logOutUser: thunk((actions, payload) => {
		axios({
			url: `${URL}user/logout`,
			method: 'DELETE',
			headers: headers,
			withCredentials: true,
			headers: headers,
		})
			.then((res) => actions.setUser(null))
			.catch((error) =>
				Promise.reject({ error: error, response: error.response.data || {} })
			);
	}),

	setUser: action((state, data) => {
		state.user = data;
	}),
};
