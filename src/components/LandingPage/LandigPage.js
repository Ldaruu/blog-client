import React, { useState, useEffect } from 'react';
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import { useStoreState, useStoreActions } from 'easy-peasy';
import './LandingPage.css';

const LandigPage = () => {
	const articles = useStoreState((state) => state.blogData.articles);
	const fetchArticles = useStoreActions(
		(action) => action.blogData.fetchArticles
	);
	useEffect(() => {
		if (!articles) fetchArticles();
	}, [articles]);

	return (
		<div className='LandingPage'>
			{articles?.posts?.map((article) => {
				return <BlogPostCard key={article.id} article={article} />;
			})}
		</div>
	);
};

export default LandigPage;
