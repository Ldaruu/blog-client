import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button/Button';
import { matchPath } from 'react-router';
import './Wrapper.css';

const Wrapper = ({ children }) => {
	const location = useLocation();
	const articlePath = matchPath(location.pathname, {
		path: '/article',
		exact: true,
		strict: false,
	});

	// console.log('PATH:', matchBlogPostPath);

	return (
		<div className='blog-wrapper'>
			<div className='wr-gradient'>
				<div className='Blog'>
					<div className='Blog_header'>
						<Header />
					</div>
					<div className='Blog-body'>
						<nav className='Blog-navbar'>
							<Button>Create Blog</Button>
							{articlePath && (
								<>
									<Button>Edit Blog</Button>
									<Button>Delete Blog</Button>
									<Button>
										<Link to={'/'}>Home</Link>
									</Button>
								</>
							)}
						</nav>

						{children}
					</div>
				</div>
			</div>
			<Footer darkTheme />
		</div>
	);
};

export default Wrapper;
