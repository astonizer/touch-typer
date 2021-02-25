import React, { useState } from 'react';

import {
	Button,
	FormControl,
	FormControlLabel,
	Grid,
	LinearProgress,
	Radio,
	RadioGroup,
	Typography,
} from '@material-ui/core';

import { useStyles } from './styles';
import Start from './Start/Start';

function Home({ beginGame }) {
	const [seconds, setSeconds] = useState('10');
	const [play, setPlay] = useState(false);
	const classes = useStyles();

	const score = localStorage.getItem('typing-score');

	function handleChange(event) {
		setSeconds(event.target.value);
	}

	function handlePlay(e) {
		e.preventDefault();
		setPlay(true);
	}

	return (
		<div className={classes.root}>
			<FormControl component="fieldset">
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="center"
				>
					<Grid item className={classes.space}>
						<Typography variant="h4">
							Select the level of difficulty
						</Typography>
					</Grid>
					<Grid item className={classes.space}>
						<RadioGroup value={seconds} onChange={handleChange}>
							<FormControlLabel
								value="10"
								control={<Radio />}
								label="Rookie"
							/>
							<FormControlLabel
								value="6"
								control={<Radio />}
								label="Average"
							/>
							<FormControlLabel
								value="4"
								control={<Radio />}
								label="Legend"
							/>
							<FormControlLabel
								value="2"
								control={<Radio />}
								label="Hacker"
							/>
							<Button
								variant="contained"
								color="primary"
								onClick={handlePlay}
								className={classes.btn}
							>
								Play
							</Button>
						</RadioGroup>
					</Grid>
					<Grid item className={classes.space}>
						<Typography variant="h4">
							High Score : {score || 0}
						</Typography>
					</Grid>

					<Grid item>
						{play && (
							<Start
								setPlay={setPlay}
								beginGame={beginGame}
								seconds={seconds}
							/>
						)}
					</Grid>
				</Grid>
			</FormControl>
		</div>
	);
}

export default Home;
