import { action, thunk } from 'easy-peasy';
import axios from 'axios';
import { URL } from '../constants/API';

let headers = {
	Accept: 'application/json',
	'Content-type': 'application/json',
};

export const blogData = {
	articles: null,
	article: null,
	formError: false,

	fetchArticles: thunk((actions, payload) => {
		axios({
			url: `${URL}posts`,
			method: 'GET',
			headers: headers,
		})
			.then((res) => actions.setArticles(res.data.posts))
			.catch((error) =>
				Promise.reject({ error: error, response: error.response.data || {} })
			);
	}),

	fetchOneArticle: thunk((actions, payload) => {
		axios({
			url: `${URL}posts/${payload}`,
			method: 'GET',
			headers: headers,
		})
			.then((res) => {
				actions.setSingleArticle(res.data);
			})
			.catch((error) =>
				Promise.reject({ error: error, response: error.response.data || {} })
			);
	}),

	postArticle: thunk((actions, payload) => {
		axios({
			url: `${URL}posts`,
			headers: { 'Content-Type': 'multipart/form-data' },
			method: 'POST',
			data: payload,
		})
			.then((res) => {
				actions.setFormError(false);
				actions.setSingleArticle(res.data?.post);
			})
			.catch((error) => {
				actions.setFormError(true);
				Promise.reject({ error: error, response: error.response.data || {} });
			});
	}),

	deleteArticle: thunk((actions, payload) => {
		axios({
			url: `${URL}posts/${payload}`,
			method: 'DELETE',
			headers: headers,
		})
			.then((res) => {
				console.log('Post Deleted!');
			})
			.catch((error) =>
				Promise.reject({ error: error, response: error.response.data || {} })
			);
	}),

	updateArticle: thunk((actions, payload, { getState, getStoreState }) => {
		let id = getState().article._id;
		axios({
			url: `${URL}posts/${id}`,
			headers: { 'Content-Type': 'multipart/form-data' },
			method: 'PATCH',
			data: payload,
		})
			.then((res) => {
				actions.setFormError(false);
				actions.setSingleArticle(res.data?.post);
			})
			.catch((error) => {
				actions.setFormError(true);
				Promise.reject({ error: error, response: error.response.data || {} });
			});
	}),

	setArticles: action((state, data) => {
		state.articles = data;
	}),

	setSingleArticle: action((state, data) => {
		state.article = data;
	}),

	setFormError: action((state, data) => {
		state.formError = data;
	}),
};
