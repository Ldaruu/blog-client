import React from 'react';
import InputField from '../common/InputField/InputField';
import Card from '@material-ui/core/Card';
import Button from '../common/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import FileUploader from '../ArticleForm/FileUploader/FileUploader';

import './SignUp.css';

const useStyles = makeStyles({
	root: {
		width: 396,
		minHeight: 345,
		boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
});

const SignUp = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<div className='regHeader'>
				<h1>Registration</h1>
				<p>Sing up so you can post articles!</p>
			</div>
			<Divider className='regDivider' />
			<form className='regForm' noValidate autoComplete='off'>
				<InputField
					id='outlined-basic'
					className='regInput'
					label='email'
					variant='outlined'
				/>
				<InputField
					id='outlined-basic'
					className='regInput'
					label='password'
					variant='outlined'
				/>
				<InputField
					id='outlined-basic'
					className='regInput'
					label='Displayed Name'
					variant='outlined'
				/>
				<FileUploader
					className='pic-upload'
					onFileSelectError={({ error }) => alert(error)}
				/>
				<Button className='regBtn'>Register</Button>
			</form>
		</Card>
	);
};

export default SignUp;
