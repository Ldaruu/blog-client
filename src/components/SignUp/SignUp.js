import React, { useState, useRef } from 'react';
import InputField from '../common/InputField/InputField';
import Card from '@material-ui/core/Card';
import Button from '../common/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import FileUploader from '../ArticleForm/FileUploader/FileUploader';
import { useStoreActions } from 'easy-peasy';
import { useHistory } from 'react-router-dom';
import './SignUp.css';

const useStyles = makeStyles({
	root: {
		width: 396,
		minHeight: 345,
		boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '40px auto',
	},
});

const SignUp = () => {
	const postArticle = useStoreActions((action) => action.userData.signUpUser);
	const toggleLoginModal = useStoreActions(
		(action) => action.userData.toggleLoginModal
	);
	const [avatar, setAvatar] = useState();
	const [singUpError, setError] = useState(false);
	const classes = useStyles();
	let history = useHistory();
	const regForm = useRef('register-form');

	const sumbitRegister = (e) => {
		e.preventDefault();
		const formData = new FormData(regForm.current);
		if (
			!formData.get('email') ||
			!formData.get('password') ||
			!formData.get('userName')
		) {
			setError(true);
		} else {
			setError(false);
			postArticle(formData);
			toggleLoginModal(true);
			history.push('/');
		}
	};

	return (
		<Card className={classes.root}>
			<div className='regHeader'>
				<h1>Registration</h1>
				<p>Sing up so you can post articles!</p>
			</div>
			<Divider className='regDivider' />
			<form
				className='regForm'
				noValidate
				autoComplete='off'
				ref={regForm}
				onSubmit={sumbitRegister}
			>
				<InputField
					className='regInput'
					label='email'
					name='email'
					type='email'
				/>
				<InputField
					className='regInput'
					label='password'
					name='password'
					type='password'
				/>
				<InputField
					className='regInput'
					label='Displayed Name'
					name='userName'
					type='text'
				/>
				<FileUploader
					className='pic-upload'
					onFileSelectSuccess={(image) => setAvatar(image)}
					onFileSelectError={({ error }) => alert(error)}
					name='avatar'
				/>
				<Button className='regBtn' type='submit'>
					Register
				</Button>
				{singUpError && (
					<div className='form-error'>
						<p className='error-msg'>
							The following fields are required:
							<br /> email, password , username
						</p>
					</div>
				)}
			</form>
		</Card>
	);
};

export default SignUp;
