import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '../common/Button/Button';
import {
	createMuiTheme,
	MuiThemeProvider,
	makeStyles,
} from '@material-ui/core/styles';
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

const theme = createMuiTheme({
	overrides: {
		MuiOutlinedInput: {
			root: {
				'& $notchedOutline': {
					borderColor: '#18181A',
				},
				'&:hover $notchedOutline': {
					borderColor: '#18181A',
				},
				'&$focused $notchedOutline': {
					borderColor: '#18181A',
					borderWidth: 2,
				},
			},
		},
		MuiFormLabel: {
			root: {
				'&.MuiFormLabel-root.Mui-focused': {
					color: '#18181A',
				},
			},
		},
	},
});

const Login = ({ toggleLoginModal }) => {
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
					toggleLoginModal(false);
				}}>
				<MuiThemeProvider theme={theme}>
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
				</MuiThemeProvider>
				<Button className='loginBtn' type='submit'>
					Login
				</Button>
			</form>
		</Card>
	);
};

export default Login;