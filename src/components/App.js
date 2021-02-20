import React, { useState } from 'react';

import { Typography } from '@material-ui/core';

import Game from './Game/Game';
import Home from './Home/Home';

function App() {
	const [time, setTime] = useState(6);
	const [start, setStart] = useState(false);

	const beginGame = time => {
		setTime(time);
		setStart(true);
	};

	const exitGame = () => {
		setStart(false);
	};

	return (
		<div>
			<Typography variant="h2">Touch Typer</Typography>
			{start ? (
				<Game time={time} exitGame={exitGame} />
			) : (
				<Home beginGame={beginGame} />
			)}
		</div>
	);
}

export default App;
