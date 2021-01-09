import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FileUploader from './FileUploader/FileUploader';
import { Editor } from '@tinymce/tinymce-react';
import Button from '../common/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import cx from 'classnames';
import { URL } from '../../constants/API';
import { useStoreState, useStoreActions } from 'easy-peasy';
import './ArticleForm.css';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
	root: {
		maxWidth: 1200,
		minHeight: 345,
		width: '100%',
		boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	focused: {
		color: '#18181A',
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

const ArticleForm = ({ className }) => {
	const classes = useStyles();
	const [title, setTitle] = useState();
	const [content, setContent] = useState();
	const [image, setImage] = useState();
	let formCard = cx('AtricleFormCard', className);
	const postArticle = useStoreActions((action) => action.blogData.postArticle);
	const article = useStoreState((state) => state.blogData.article);
	let history = useHistory();

	const formData = new FormData();
	const submitForm = async (e) => {
		e.preventDefault();
		formData.append('title', title);
		formData.append('content', content);
		formData.append('postImage', image);
		await postArticle(formData);
		history.push(`/article/${article.slug}`);
	};

	return (
		<Card className={`${classes.root} ${formCard}`}>
			<h2>Write a Blog Post</h2>
			<form className='ArticleForm-form' noValidate autoComplete='off'>
				<div className='form-head'>
					<MuiThemeProvider theme={theme}>
						<TextField
							id='outlined-basic 1'
							className={`title-input ${classes.focused}`}
							onChange={(e) => setTitle(e.target.value)}
							name='title'
							type='text'
							label='Article Title'
							variant='outlined'
						/>
					</MuiThemeProvider>
					<FileUploader
						onFileSelectSuccess={(image) => setImage(image)}
						onFileSelectError={({ error }) => alert(error)}
						image={image}
					/>
				</div>
				<Editor
					init={{
						height: 450,
						max_width: 850,
						menubar: false,
						plugins: [
							'advlist autolink lists link image charmap print preview anchor',
							'searchreplace visualblocks code fullscreen',
							'insertdatetime media table paste code help wordcount',
						],
						toolbar:
							'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
					}}
					onEditorChange={(content, editor) => setContent(content)}
				/>
				<Button
					className='article-submit-btn'
					type='submit'
					onClick={submitForm}>
					Post Article
				</Button>
			</form>
		</Card>
	);
};

export default ArticleForm;
