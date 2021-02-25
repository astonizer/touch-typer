import {
	Button,
	Container,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import words from '../../data/words.json';
import { useStyles } from './styles';

function Game({ time, exitGame }) {
	const [newWord, setNewWord] = useState(generateRandomWord(words));
	const [score, setScore] = useState(0);
	const [timeLeft, setTimeLeft] = useState(time);
	const classes = useStyles();

	useEffect(() => {
		let intervalId = setTimeout(() => {
			if (time > 0) {
				setTimeLeft(timeLeft - 1);
			}
		}, 1000);

		if (timeLeft === 0) handleExit();
		return () => {
			clearTimeout(intervalId);
		};
	}, [timeLeft]);

	/**
	 *
	 * @param {array}
	 * @description generate random word
	 * @returns random word
	 */
	function generateRandomWord(words) {
		let randomIndex = Math.floor(Math.random() * words.length);
		return words[randomIndex];
	}

	/**
	 *
	 * @param {Object} e
	 * @description constantly checks the input
	 */
	function handleChange(e) {
		if (e.target.value === newWord) {
			e.target.value = '';
			setScore(score + 1);
			setNewWord(generateRandomWord(words));
			setTimeLeft(time);
		}
	}

	/**
	 *
	 * @description exit the game on losing
	 */
	function handleExit() {
		if (score > localStorage.getItem('typing-score'))
			localStorage.setItem('typing-score', score);
		exitGame();
	}

	return (
		<div className={classes.root}>
			<Typography variant="h4" className={classes.text}>
				Type the given word in {time} seconds
			</Typography>
			<Container maxWidth="xs">
				<Paper>
					<Typography variant="h3" className={classes.text}>
						{newWord}
					</Typography>
				</Paper>
			</Container>
			<TextField
				autoFocus
				type="text"
				onChange={handleChange}
				variant="outlined"
				className={classes.text}
			/>
			<Typography variant="h4" className={classes.text}>
				Time left: <span className={classes.red}>{timeLeft}</span>
			</Typography>
			<Typography variant="h4" className={classes.text}>
				Score: {score}
			</Typography>
			<Typography variant="h6" className={classes.text}>
				~ Don't limit yourself to the given time, try to type it as fast
				as you can.
				<br />~ Scoring is based purely on the completion of typing the
				word and not on the time taken.
				<br />~ Some words might actually feel difficult, but they are
				randomly generated so it's not under control.
				<br />~ The words are generated randomly so don't mind any CUSS
				words, if they show up.
				<br />~ Note: These instructions are only to fill up the area, I
				hope you understand.
			</Typography>
			<Button
				variant="contained"
				className={classes.btn}
				color="primary"
				onClick={handleExit}
			>
				Exit
			</Button>
		</div>
	);
}

export default Game;
