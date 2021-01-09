import React from 'react';
import Button from '@material-ui/core/Button';
import cx from 'classnames';
import './Button.css';

const _Button = ({ children, className, ...rest }) => {
	let btn = cx('blog-button', className);
	return (
		<Button className={btn} variant='contained' {...rest}>
			{children}
		</Button>
	);
};

export default _Button;
