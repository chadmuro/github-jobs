import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Button,
	Typography,
	Chip,
	Collapse,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	card: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	main: {
		display: 'flex',
	},
	mainBottom: {
		marginBottom: theme.spacing(2),
	},
	content: {
		flex: 1,
		padding: theme.spacing(2, 2, 0, 2),
	},
	chip: {
		margin: theme.spacing(0.5, 0.5, 0.5, 0),
		borderRadius: 4,
	},
	media: {
		margin: theme.spacing(2, 1, 0, 1),
	},
	description: {
		padding: theme.spacing(0, 2),
	},
	image: {
		maxWidth: '100px',
	},
}));

const Job = ({ job }) => {
	const [expanded, setExpanded] = useState(false);
	const classes = useStyles();

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.card}>
			<div className={classes.main}>
				<CardContent className={classes.content}>
					<Typography variant="h5" component="h2">
						{job.title} -{' '}
						<Typography variant="h5" color="textSecondary" component="span">
							{job.company}
						</Typography>
					</Typography>
					<Typography gutterBottom>
						{new Date(job.created_at).toLocaleDateString()}
					</Typography>
					<Chip
						size="small"
						color="primary"
						label={job.type}
						className={classes.chip}
					/>
					<Chip
						size="small"
						color="primary"
						label={job.location}
						className={classes.chip}
					/>
					<div style={{ wordBreak: 'break-all' }}>
						<ReactMarkdown
							plugins={[gfm]}
							children={job.how_to_apply}
							linkTarget="_blank"
						/>
					</div>
				</CardContent>
				<CardMedia className={classes.media}>
					<img
						src={job.company_logo}
						alt={job.company}
						className={classes.image}
					/>
				</CardMedia>
			</div>
			<div className={classes.mainBottom}>
				<CardActions>
					<Button
						color="secondary"
						variant="contained"
						size="small"
						onClick={handleExpandClick}
					>
						{expanded ? 'Hide Details' : 'View Details'}
					</Button>
				</CardActions>
				<Collapse in={expanded} unmountOnExit>
					<div className={classes.description}>
						<ReactMarkdown plugins={[gfm]} children={job.description} />
					</div>
				</Collapse>
			</div>
		</Card>
	);
};

export default Job;
