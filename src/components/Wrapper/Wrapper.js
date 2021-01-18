import React, { useState } from 'react';
import AppBar from '../common/AppBar/AppBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Button from '../common/Button/Button';
import Modal from '../common/Modal/Modal';
import ArticleForm from '../ArticleForm/ArticleForm';
import Login from '../Login/Login';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { matchPath } from 'react-router';
import { useStoreState, useStoreActions } from 'easy-peasy';
import './Wrapper.css';

const Wrapper = ({ children }) => {
	const location = useLocation();
	const user = useStoreState((state) => state.userData.user);
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
	const [isLoginOpen, toggleLoginModal] = useState(false);

	const closeFormModal = () => {
		openModal(false);
	};

	const deleteBlogPost = () => {
		deleteArticle();
		history.push('/');
	};
	console.log('Art: ', article);
	return (
		<div className='blog-wrapper'>
			<div className='wr-gradient'>
				<AppBar toggleLoginModal={toggleLoginModal} />
				<div className='Blog'>
					<div className='Blog_header'>
						<Header />
					</div>
					<div className='Blog-body'>
						<nav className='Blog-navbar'>
							{user && (
								<>
									<Button onClick={() => openModal(true)}>Create Blog</Button>
									{articlePath && article?.user_account?._id === user.id && (
										<>
											<Button>
												<Link to={'/edit/' + article?.slug}>Edit Blog</Link>
											</Button>
											<Button onClick={deleteBlogPost}>Delete Blog</Button>
										</>
									)}
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
						<Modal
							maxWidth='sm'
							open={isLoginOpen}
							onClose={() => toggleLoginModal(false)}>
							<Login toggleLoginModal={toggleLoginModal} />
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
