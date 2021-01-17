import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '../common/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { useStoreActions } from 'easy-peasy';
import './Login.css';

const useStyles = makeStyles({
	root: {
		maxWidth: 396,
		minHeight: 345,
		width: '100%',
		// boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
});

const Login = () => {
	const classes = useStyles();
	const [email, setEmail] = useState();
	const [password, setPW] = useState();

	const loginUser = useStoreActions((action) => action.userData.loginUser);

	const handleChange = (e) => {
		e.target.name === 'email'
			? setEmail(e.target.value)
			: setPW(e.target.value);
	};

	const user = { email: email, password: password };
	return (
		<Card className={`${classes.root} login-card`}>
			<form
				className='loginForm'
				noValidate
				autoComplete='off'
				onSubmit={(e) => {
					e.preventDefault();
					loginUser(user);
				}}>
				<TextField
					id='outlined-basic 1'
					className='loginInput'
					onChange={handleChange}
					name='email'
					type='email'
					label='email'
					variant='outlined'
				/>
				<TextField
					id='outlined-basic 2'
					className='loginInput'
					onChange={handleChange}
					name='password'
					type='password'
					label='password'
					variant='outlined'
				/>
				<Button className='loginBtn' type='submit'>
					Login
				</Button>
			</form>
		</Card>
	);
};

export default Login;
