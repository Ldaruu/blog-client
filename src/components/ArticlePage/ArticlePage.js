import React from 'react';
import './ArticlePage.css';
import { useStoreState } from 'easy-peasy';

const ArticlePage = () => {
	const article = useStoreState((state) => state.blogData.article);

	return (
		<div className='ArticlePage'>
			<div className='ArticlePage_article'>{article?.content}</div>
		</div>
	);
};

export default ArticlePage;
