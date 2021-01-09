import React from 'react';
import { useStoreState } from 'easy-peasy';
import ReactHtmlParser from 'react-html-parser';
import './ArticlePage.css';

const ArticlePage = () => {
	const article = useStoreState((state) => state.blogData.article);

	return (
		<div className='ArticlePage'>
			<div className='ArticlePage_article'>
				{ReactHtmlParser(article?.content)}
			</div>
		</div>
	);
};

export default ArticlePage;
