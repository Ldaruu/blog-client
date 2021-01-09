import React from 'react';
import './ArticlePage.css';
import { useStoreState } from 'easy-peasy';

const ArticlePage = () => {
	const article = useStoreState((state) => state.blogData.article);
	console.log('Article: ', article);
	return (
		<div className='ArticlePage'>
			<div className='ArticlePage_article'>
				Of course, not everything in your report will exactly be you, there are
				so many factors that make you, you. We found the best way to approach
				your Gravity report is to use it as a guide to understand your
				predispositions. The report can give you an idea about your underlying
				approaches to life. That can be powerful stuff! People have said to us
				things like “it is cathartic to know these traits are pre-determined!”
				Or now I understand why I’m always doing x y z. We hope you enjoy the
				journey and take something from these reports. We know we did.
			</div>
		</div>
	);
};

export default ArticlePage;
