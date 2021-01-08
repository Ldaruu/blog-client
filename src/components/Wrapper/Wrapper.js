import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';
import './Wrapper.css';

const Wrapper = ({ children }) => {
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
							<Button>Edit Blog</Button>
							<Button>Delete Blog</Button>
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
