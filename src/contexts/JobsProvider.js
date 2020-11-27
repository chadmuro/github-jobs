import React, { useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import JobsContext from './JobsContext';
import { JobsReducer } from './JobsReducer';
import InputContext from './InputContext';
import { GET_DATA, ERROR, UPDATE_HAS_NEXT_PAGE } from '../contexts/JobsTypes';

const JobsProvider = props => {
	const { description, location, fulltime, page } = useContext(InputContext);
	const initialState = {
		jobs: [],
		loading: true,
		error: '',
		hasNextPage: false,
	};

	const [state, dispatch] = useReducer(JobsReducer, initialState);

	const { jobs, loading, error, hasNextPage } = state;

	const BASE_URL = '/positions.json';

	useEffect(() => {
		const cancelToken1 = axios.CancelToken.source();
		axios
			.get(BASE_URL, {
				cancelToken: cancelToken1.token,
				params: {
					markdown: true,
					page,
					description,
					location,
					full_time: fulltime,
				},
			})
			.then(res => {
				dispatch({ type: GET_DATA, payload: { jobs: res.data } });
			})
			.catch(err => {
				if (axios.isCancel(err)) return;
				dispatch({ type: ERROR, payload: { error: err } });
			});

		const cancelToken2 = axios.CancelToken.source();
		axios
			.get(BASE_URL, {
				cancelToken: cancelToken2.token,
				params: {
					markdown: true,
					page: page + 1,
					description,
					location,
					full_time: fulltime,
				},
			})
			.then(res => {
				dispatch({
					type: UPDATE_HAS_NEXT_PAGE,
					payload: { hasNextPage: res.data.length !== 0 },
				});
			})
			.catch(err => {
				if (axios.isCancel(err)) return;
				dispatch({ type: ERROR, payload: { error: err } });
			});
		return () => {
			cancelToken1.cancel();
			cancelToken2.cancel();
		};
	}, [description, location, fulltime, page]);

	return (
		<JobsContext.Provider
			value={{
				jobs,
				loading,
				error,
				hasNextPage,
			}}
		>
			{props.children}
		</JobsContext.Provider>
	);
};

export default JobsProvider;
