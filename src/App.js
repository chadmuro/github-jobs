import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Job from './components/Job';
import JobsPagination from './components/JobsPagination';
import SearchForm from './components/SearchForm';
import JobsContext from './contexts/JobsContext';

const App = () => {
	const { jobs, loading, error } = useContext(JobsContext);

	return (
		<Container maxWidth="md">
			<Header />
			<SearchForm />
			<JobsPagination />
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error. Try Refreshing</h1>}
			{jobs.map(job => {
				return <Job key={job.id} job={job} />;
			})}
			<JobsPagination />
		</Container>
	);
};

export default App;
