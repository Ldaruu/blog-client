import React from 'react';
import './Footer.css';

const Footer = (darkTheme) => {
	let themeCl = darkTheme.darkTheme ? 'dark' : 'light';

	return (
		<div className={`gr-footer ${themeCl}-theme`}>
			<div className='copyrights'>
				<span>© 2021 SIMPLE BLOG</span>
				<span className='desktop-only'> | All Rights Reserved</span>
			</div>
			<div className='links'>
				<span>Laszlo Daru</span>
			</div>
		</div>
	);
};

export default Footer;
