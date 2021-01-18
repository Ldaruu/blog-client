import React from 'react';
import { TextField } from '@material-ui/core';
import {
	createMuiTheme,
	MuiThemeProvider,
	makeStyles,
} from '@material-ui/core/styles';
import cx from 'classnames';

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

const InputField = ({ className, ...rest }) => {
	let input = cx('blog-inputField', className);

	return (
		<MuiThemeProvider theme={theme}>
			<TextField className={input} variant='outlined' {...rest} />
		</MuiThemeProvider>
	);
};

export default InputField;
