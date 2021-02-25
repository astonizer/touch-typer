import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	root: {
		minHeight: '100vh',
		minWidth: '100vw',
		background: 'rgb(255,255,255)',
		background:
			'linear-gradient(180deg, rgba(255,255,255,1) 13%, rgba(118,142,195,1) 100%)',
	},
	title: {
		textAlign: 'center',
		paddingTop: '5%',
	},
});
