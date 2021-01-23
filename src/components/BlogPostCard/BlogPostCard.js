import React from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import BabyYoda from '../ArticlePage/images/babyoda.jpeg';
import { URL } from '../../constants/API';
import { useStoreActions } from 'easy-peasy';
import ReactHtmlParser from 'react-html-parser';
import truncate from 'lodash/truncate';
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
} from '@material-ui/core';
import './BlogPostCard.css';

const useStyles = makeStyles({
	root: {
		maxWidth: 850,
		width: '100%',
		height: 300,
		boxShadow: '0 4px 4px rgba(0,0,0,.25)',
		margin: 16,
	},
	media: {
		height: 140,
		// paddingTop: '10%',
	},
	content: {
		padding: 12,
	},
});

const BlogPostCard = ({ className, article }) => {
	const fetchOneArticles = useStoreActions(
		(action) => action.blogData.fetchOneArticle
	);
	let card = cx('BlogPostCard', className);
	const classes = useStyles();

	const setText = (text) => {
		let characters = 300;
		let tt = truncate(text, { length: characters });
		return tt;
	};

	let content = setText(article.content);

	return (
		<Link to={`/article/${article.slug}`} className='Article-link'>
			<Card
				className={`${classes.root} ${card}`}
				onClick={() => fetchOneArticles(article.slug)}
			>
				<CardMedia
					className={classes.media}
					image={article.postImage ? URL + article.postImage : BabyYoda}
					title='Contemplative Reptile'
				/>
				<CardContent className={classes.content}>
					<div className='BlogPostCard_content'>
						<div className='content-inner'>
							<h3>{article.title}</h3>
							<div className='BlogPost_text'>{ReactHtmlParser(content)}</div>
						</div>
						<div className='card-footer'>
							<p>
								Posted by <span>{article.user_account.userName}</span>
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
};

export default BlogPostCard;
