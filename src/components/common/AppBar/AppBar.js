import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { URL } from '../../../constants/API';
import './AppBar.css';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#fff',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		color: '#172830',
		fontWeight: 600,
		fontSize: 24,
	},
	btnRoot: {
		color: '#172830',
		fontWeight: 600,
		fontSize: 18,
		letterSpacing: '0.34px',
		textDecoration: 'none',
		cursor: 'pointer',
	},
}));

export default function ButtonAppBar({ toggleLoginModal }) {
	const classes = useStyles();
	const location = useLocation();
	const user = useStoreState((state) => state.userData.user);
	const logOutUser = useStoreActions((action) => action.userData.logOutUser);
	const homePath = matchPath(location.pathname, {
		path: '/',
		exact: true,
		strict: false,
	});

	return (
		<AppBar position='static' className={`${classes.root} top-menu-bar`}>
			<Toolbar>
				<Typography variant='h6' className={classes.title}>
					<Link to='/'>Blog</Link>
				</Typography>
				<div className='AppBar-navigation'>
					{!user && (
						<>
							<Button className={classes.btnRoot}>
								<Link to='/signup'>Signup</Link>
							</Button>
							<Button
								className={classes.btnRoot}
								onClick={() => toggleLoginModal(true)}
							>
								<Link to='/'>Login</Link>
							</Button>
						</>
					)}
					{user && (
						<div className='user-btns'>
							<Avatar
								className='user-avatar'
								alt={user.userName.split('')[0]}
								src={URL + user.avatar}
							/>
							<Button className={classes.btnRoot} onClick={() => logOutUser()}>
								<Link to='/'>Logout</Link>
							</Button>
						</div>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
}
