import React, { useContext } from 'react';
import { Pagination } from '@material-ui/lab';
import InputContext from '../contexts/InputContext';
import JobsContext from '../contexts/JobsContext';

const JobsPagination = () => {
	const { page, setPage } = useContext(InputContext);
	const { hasNextPage } = useContext(JobsContext);

	const handleChange = (e, page) => {
		setPage(page);
	};

	return (
		<div>
			<Pagination
				count={hasNextPage ? page + 1 : page}
				page={page}
				shape="rounded"
				color="primary"
				onChange={handleChange}
				hidePrevButton={page === 1 ? true : false}
				hideNextButton={hasNextPage ? false : true}
			/>
		</div>
	);
};

export default JobsPagination;
