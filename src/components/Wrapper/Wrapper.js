import React, { useState } from 'react';
import AppBar from '../common/AppBar/AppBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button/Button';
import Modal from '../common/Modal/Modal';
import ArticleForm from '../ArticleForm/ArticleForm';
import { matchPath } from 'react-router';
import './Wrapper.css';

const Wrapper = ({ children }) => {
	const location = useLocation();
	const articlePath = matchPath(location.pathname, {
		path: '/article',
		exact: true,
		strict: false,
	});

	const [isCreateBlogOpen, openModal] = useState(false);

	const closeFormModal = () => {
		openModal(false);
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
										<Link to='/edit'>Edit Blog</Link>
									</Button>
									<Button>Delete Blog</Button>
								</>
							)}
						</nav>
						<Modal
							maxWidth={'md'}
							fullWidth={true}
							open={isCreateBlogOpen}
							onClose={closeFormModal}
							className='Create-Article-form'>
							<ArticleForm className='CreatePostForm' />
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
