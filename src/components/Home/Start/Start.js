import React, { useEffect, useState } from 'react';

import { LinearProgress, Typography } from '@material-ui/core';

function Start({ setPlay, beginGame, seconds }) {
	const [time, setTime] = useState(3);

	useEffect(() => {
		// exit early when we reach 0
		if (!time) {
			setPlay(false);
			beginGame(seconds);
		}

		// save intervalId to clear the interval when the
		// component re-renders
		let intervalId = setInterval(() => {
			setTime(time - 1);
		}, 1000);

		// clear interval on re-render to avoid memory leaks
		return () => clearInterval(intervalId);
	}, [time]);

	return (
		<div>
			<LinearProgress />
			<Typography variant="h5">Showtime in {time}s</Typography>
		</div>
	);
}

export default Start;
