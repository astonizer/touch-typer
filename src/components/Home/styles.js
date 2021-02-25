import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	},
	space: {
		marginBottom: '10%',
	},
	btn: {
		marginTop: '10%',
	},
});
