import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';
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
		fontSize: 24,
		textDecoration: 'none',
		cursor: 'pointer',
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();
	const location = useLocation();
	const homePath = matchPath(location.pathname, {
		path: '/',
		exact: true,
		strict: false,
	});

	return (
		<AppBar position='static' className={`${classes.root} top-menu-bar`}>
			<Toolbar>
				<Typography variant='h6' className={classes.title}>
					Blog
				</Typography>
				<div className='AppBar-navigation'>
					{!homePath && (
						<Button className={classes.btnRoot}>
							<Link to='/'>Home</Link>
						</Button>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
}
