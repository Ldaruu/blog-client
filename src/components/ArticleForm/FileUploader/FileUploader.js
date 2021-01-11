import React from 'react';
import Button from '../../common/Button/Button';
import './FileUploader.css';

const FileUploader = ({ onFileSelectSuccess, onFileSelectError }) => {
	const handleFileInput = (e) => {
		// handle validations
		const file = e.target.files[0];
		if (file.size > 1024 * 1024 * 5) {
			onFileSelectError({ error: 'File size cannot exceed more than 5MB' });
			document.getElementById('file-input').value = '';
		} else if (isImage(file) != true) {
			onFileSelectError({ error: 'We only accept JPEG :(' });
			document.getElementById('file-input').value = '';
		} else onFileSelectSuccess(file);
	};

	const isImage = (file) => {
		const acceptedImageTypes = ['image/jpeg'];
		console.log(file && acceptedImageTypes.includes(file['type']));
		return file && acceptedImageTypes.includes(file['type']);
	};

	return (
		<div className='file-uploader'>
			<Button className='file-uploader-btn'>
				<label>
					<input
						id='file-input'
						className='image-input'
						onChange={handleFileInput}
						name='postImage'
						type='file'
					/>
					Upload Image
				</label>
			</Button>
		</div>
	);
};

export default FileUploader;
