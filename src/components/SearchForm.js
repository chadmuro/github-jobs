import React, { useContext } from 'react';
import {
	TextField,
	Checkbox,
	FormControlLabel,
	makeStyles,
} from '@material-ui/core';
import InputContext from '../contexts/InputContext';
import JobsContext from '../contexts/JobsContext';

const useStyles = makeStyles(theme => ({
	search: {
		display: 'flex',
		marginBottom: theme.spacing(2),
	},
	input: {
		flex: 1,
		marginRight: theme.spacing(2),
	},
}));

const SearchForm = () => {
	const classes = useStyles();
	const { description, location, fulltime, setDescription, setLocation, setFulltime}  = useContext(InputContext);
	const { fetchJobs } = useContext(JobsContext);
	const params = {
		description, location, fulltime
	}

	return (
		<div className={classes.search} >
			<TextField
				name="description"
				label="Description"
				className={classes.input}
				onChange={e => setDescription(e.target.value)}
				value={description}
			/>
			<TextField
				name="location"
				label="Location"
				className={classes.input}
				onChange={e => setLocation(e.target.value)}
				value={location}
			/>
			<FormControlLabel
				control={
					<Checkbox
						onChange={() => setFulltime(!fulltime)}
						checked={fulltime}
						name="fulltime"
					/>
				}
				label="Full Time"
			/>
		</div>
	);
};

export default SearchForm;
