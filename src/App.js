import React, { useState, useContext } from 'react';
import { Container } from '@material-ui/core';
import Job from './components/Job';
import JobsPagination from './components/JobsPagination';
import SearchForm from './components/SearchForm';
import JobsContext from './contexts/JobsContext';

const App = () => {
	const [page, setPage] = useState(1);
	const { jobs, loading, error } = useContext(JobsContext);

	return (
		<Container maxWidth="md">
			<SearchForm />
			{/* <JobsPagination page={page} setPage={setPage} /> */}
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error. Try Refreshing</h1>}
			{jobs.map(job => {
				return <Job key={job.id} job={job} />;
			})}
			{/* <JobsPagination page={page} setPage={setPage} /> */}
		</Container>
	);
}

export default App;
