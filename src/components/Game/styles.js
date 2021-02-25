import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing(8),
	},
	text: {
		paddingTop: theme.spacing(2),
	},
	btn: {
		marginTop: theme.spacing(4),
	},
	red: {
		color: 'red',
	},
}));
