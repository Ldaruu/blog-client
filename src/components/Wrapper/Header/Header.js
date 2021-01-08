import React from 'react';
import cx from 'classnames';
import yoda from '../../ArticlePage/images/babyoda.jpeg';
import './Header.css';

const Header = ({ className }) => {
	const header = cx('HeaderImage', className);

	const divStyle = {
		backgroundImage: `url(${yoda}), linear-gradient(180deg, #1F1E3D 0%, rgba(26, 20, 80, 0.0001) 191.69%)`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
	};

	return (
		<div className={header} style={divStyle}>
			<div className='HeaderImage_inner'>
				<div className='HeaderImage_title'>
					<h1>{`Laszlo's Blog`}</h1>
				</div>
			</div>
		</div>
	);
};

export default Header;
