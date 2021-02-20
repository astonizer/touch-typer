import React, { useEffect, useState } from 'react';

import { Button, TextField, Typography } from '@material-ui/core';

import words from '../../data/words.json';

function Game({ time, exitGame }) {
	const [play, setPlay] = useState(true);
	const [newWord, setNewWord] = useState('');
	const [score, setScore] = useState(0);
	const [timeOutFunc, setTimeOutFunc] = useState();

	// Non-state variable to avoid unnecessary re-renders
	let timeLeft = time;

	// const [timeLeft, setTimeLeft] = useState(time);

	useEffect(() => {
		setNewWord(generateRandomWord(words));
		timeLeft = time;
		// setTimeLeft(time);
		let intervalId = setInterval(countdown, 1000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);

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

	function countdown() {
		console.log('time reduced to ', timeLeft);
		if (timeLeft > 0) {
			// setTimeLeft(timeLeft - 1);
			timeLeft--;
		} else if (timeLeft === 0) {
			clearInterval(timeOutFunc);
			exitGame();
		}
	}

	return (
		<div>
			<Typography variant="h4">
				Type the given word in {time} seconds
			</Typography>
			<Typography variant="h3">{newWord}</Typography>
			<TextField
				id="outlined-password-input"
				label="Type here"
				type="text"
				autoComplete="current-password"
				variant="outlined"
			/>
			<Typography variant="h4">Time left: {timeLeft}</Typography>
			<Typography variant="h4">Score: {score}</Typography>
			<Typography variant="h5">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
				neque ipsam ut veritatis nulla facere quibusdam nam ipsa
				accusantium recusandae nobis sit, ducimus fuga quisquam minima
				quae vero reprehenderit. Saepe!
			</Typography>
			<Button onClick={() => exitGame()} size="large" variant="contained">
				Exit
			</Button>
		</div>
	);
}

export default Game;
