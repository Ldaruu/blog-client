import React from 'react';
import cx from 'classnames';
import yoda from '../../ArticlePage/images/babyoda.jpeg';
import { useStoreState } from 'easy-peasy';
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';
import { URL } from '../../../constants/API';
import './Header.css';

const Header = ({ className }) => {
	const header = cx('HeaderImage', className);
	const article = useStoreState((state) => state.blogData.article);
	const location = useLocation();

	const articlePath = matchPath(location.pathname, {
		path: ['/article/:slug', '/edit/:slug'],
		exact: true,
		strict: false,
	});

	const imageUrl = URL + article?.postImage;
	const divStyle = {
		backgroundImage: `url(${
			articlePath ? imageUrl : yoda
		}), linear-gradient(180deg, #1F1E3D 0%, rgba(26, 20, 80, 0.0001) 191.69%)`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
	};

	return (
		<div className={header} style={divStyle}>
			<div className='HeaderImage_inner'>
				<div className='HeaderImage_title'>
					<h1>{articlePath ? article?.title : 'Simple Blog'}</h1>
				</div>
			</div>
		</div>
	);
};

export default Header;
