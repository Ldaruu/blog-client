import React from 'react';
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import './LandingPage.css';

const LandigPage = () => {
	return (
		<div className='LandingPage'>
			<BlogPostCard />
			<BlogPostCard />
			<BlogPostCard />
		</div>
	);
};

export default LandigPage;
