import React from 'react';
import Button from '@material-ui/core/Button';
import './Button.css';

const _Button = ({ children }) => {
	return (
		<Button className='blog-button' variant='contained'>
			{children}
		</Button>
	);
};

export default _Button;
