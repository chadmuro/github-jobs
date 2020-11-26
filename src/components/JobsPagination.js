import React from 'react';
import { Pagination } from '@material-ui/lab';

const JobsPagination = ({ page, setPage }) => {


	return (
        <Pagination page={page} shape="rounded" color="primary" />
    );
};

export default JobsPagination;
