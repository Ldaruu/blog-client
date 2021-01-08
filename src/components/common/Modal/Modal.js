import Dialog from '@material-ui/core/Dialog';
import cx from 'classnames';

const _Modal = (props) => {
	const { children, open, onClose, className, ...rest } = props;
	let modal = cx('Modal', className);

	return (
		<Dialog
			open={open}
			className={modal}
			onClose={onClose}
			scroll='body'
			{...rest}>
			{children}
		</Dialog>
	);
};

export default _Modal;
