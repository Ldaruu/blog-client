import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import ReactHtmlParser from 'react-html-parser';
import './ArticlePage.css';

const ArticlePage = (props) => {
	const article = useStoreState((state) => state.blogData.article);
	const fetchOneArticles = useStoreActions(
		(action) => action.blogData.fetchOneArticle
	);

	useEffect(() => {
		fetchOneArticles(props.match.params.slug);
	}, [!article]);

	return (
		<div className='ArticlePage'>
			<div className='ArticlePage_article'>
				{ReactHtmlParser(article?.content)}
			</div>
		</div>
	);
};

export default ArticlePage;
