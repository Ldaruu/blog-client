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
			.then((res) => actions.setArticles(res.data))
			.catch((error) =>
				Promise.reject({ error: error, response: error.response.data || {} })
			);
	}),

	fetchOneArticle: thunk((actions, payload) => {
		console.log('P:', payload);
		axios({
			url: `${URL}posts/${payload}`,
			method: 'GET',
			headers: headers,
			querry: { slug: JSON.stringify(payload) },
		})
			.then((res) => actions.setSingleArticle(res.data))
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
