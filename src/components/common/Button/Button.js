import React from 'react';
import Button from '@material-ui/core/Button';
import cx from 'classnames';
import './Button.css';

const _Button = ({ children, className }) => {
	let btn = cx('blog-button', className);
	return (
		<Button className={btn} variant='contained'>
			{children}
		</Button>
	);
};

export default _Button;
