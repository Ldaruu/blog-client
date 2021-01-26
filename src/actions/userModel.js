import { action, thunk } from 'easy-peasy';
import axios from 'axios';
import { URL } from '../constants/API';

let headers = {
	Accept: 'application/json',
	'Content-type': 'application/json',
};

export const userData = {
	user: null,
	isLoginOpen: false,

	signUpUser: thunk((actions, payload) => {
		axios({
			url: `${URL}user/signup`,
			method: 'POST',
			withCredentials: true,
			headers: { 'Content-Type': 'multipart/form-data' },
			data: payload,
		})
			.then((res) => console.log('Registered', res))
			.catch((error) =>
				Promise.reject({ error: error, response: error.response.data || {} })
			);
	}),

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
		})
			.then((res) => actions.setUser(null))
			.catch((error) =>
				Promise.reject({ error: error, response: error.response.data || {} })
			);
	}),

	autoLogin: thunk((actions, payload) => {
		axios({
			url: `${URL}user/auto_login`,
			method: 'POST',
			headers: headers,
			withCredentials: true,
		})
			.then((res) => actions.setUser(res.data))
			.catch((error) =>
				Promise.reject({ error: error, response: error.response.data || {} })
			);
	}),

	setUser: action((state, data) => {
		state.user = data;
	}),

	toggleLoginModal: action((state, data) => {
		state.isLoginOpen = data;
	}),
};
