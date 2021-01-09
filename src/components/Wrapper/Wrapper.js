import React, { useState } from 'react';
import AppBar from '../common/AppBar/AppBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button/Button';
import Modal from '../common/Modal/Modal';
import ArticleForm from '../ArticleForm/ArticleForm';
import { matchPath } from 'react-router';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useHistory } from 'react-router-dom';
import './Wrapper.css';

const Wrapper = ({ children }) => {
	const location = useLocation();
	const article = useStoreState((state) => state.blogData.article);
	const deleteArticle = useStoreActions(
		(action) => action.blogData.deleteArticle
	);

	const articlePath = matchPath(location.pathname, {
		path: '/article/:slug',
		exact: true,
		strict: false,
	});

	let history = useHistory();

	const [isCreateBlogOpen, openModal] = useState(false);

	const closeFormModal = () => {
		openModal(false);
	};

	const deleteBlogPost = () => {
		deleteArticle(article._id);
		history.push('/');
	};

	return (
		<div className='blog-wrapper'>
			<div className='wr-gradient'>
				<AppBar />
				<div className='Blog'>
					<div className='Blog_header'>
						<Header />
					</div>
					<div className='Blog-body'>
						<nav className='Blog-navbar'>
							<Button onClick={() => openModal(true)}>Create Blog</Button>
							{articlePath && (
								<>
									<Button>
										<Link to={'/edit/' + article?.slug}>Edit Blog</Link>
									</Button>
									<Button onClick={deleteBlogPost}>Delete Blog</Button>
								</>
							)}
						</nav>
						<Modal
							maxWidth={'md'}
							fullWidth={true}
							open={isCreateBlogOpen}
							onClose={closeFormModal}
							className='Create-Article-form'>
							<ArticleForm
								className='CreatePostForm'
								closeFormModal={closeFormModal}
							/>
						</Modal>
						{children}
					</div>
				</div>
			</div>
			<Footer darkTheme />
		</div>
	);
};

export default Wrapper;
