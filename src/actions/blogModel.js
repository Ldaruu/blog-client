import { action, thunk } from 'easy-peasy';
import axios from 'axios';
import { URL } from '../constants/API';

let headers = {
	Accept: 'application/json',
	'Content-type': 'application/json',
};

const blogData = {
	articles: null,
	article: null,

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
			.then((res) => actions.setSingleArticle(res.data?.post))
			.catch((error) =>
				Promise.reject({ error: error, response: error.response || {} })
			);
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

	setArticles: action((state, data) => {
		state.articles = data;
	}),

	setSingleArticle: action((state, data) => {
		state.article = data;
	}),
};

export const blogModel = {
	blogData,
};
