import React from 'react';
import cx from 'classnames';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import BabyYoda from '../ArticlePage/images/babyoda.jpeg';
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

const BlogPostCard = ({ className }) => {
	let card = cx('BlogPostCard', className);
	const classes = useStyles();
	return (
		<Card className={`${classes.root} ${card}`}>
			<Link to={'/article'}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={BabyYoda}
						title='Contemplative Reptile'
					/>
					<CardContent className={classes.content}>
						<div className='BlogPostCard_content'>
							<div className='content-inner'>
								<h3>Best Title</h3>
								<div className='BlogPost_text'>
									<p>
										Of course, not everything in your report will exactly be
										you, there are so many factors that make you, you. We found
										the best way to approach your Gravity report is to use it as
										a guide to understand your predispositions. The report can
										give you an idea about your underlying approaches to life.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
};

export default BlogPostCard;
