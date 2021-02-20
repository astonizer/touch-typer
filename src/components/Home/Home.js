import React, { useState } from 'react';

import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@material-ui/core';

function Home({ beginGame }) {
	const [seconds, setSeconds] = useState('6');

	return (
		<div>
			<FormControl component="fieldset">
				<FormLabel component="legend">
					<Typography variant="h4">
						Select the level of difficulty
					</Typography>
				</FormLabel>
				<RadioGroup
					value={seconds}
					onChange={event => {
						setSeconds(event.target.value);
					}}
				>
					<FormControlLabel
						value="6"
						control={<Radio />}
						label="Rookie"
					/>
					<FormControlLabel
						value="4"
						control={<Radio />}
						label="Amateur"
					/>
					<FormControlLabel
						value="2"
						control={<Radio />}
						label="Expert"
					/>
				</RadioGroup>
				<Button
					onClick={() => beginGame(seconds)}
					size="large"
					variant="contained"
				>
					Play
				</Button>
			</FormControl>
		</div>
	);
}

export default Home;
