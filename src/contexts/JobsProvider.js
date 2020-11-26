import React, { useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import JobsContext from './JobsContext';
import { JobsReducer } from './JobsReducer';
import InputContext from './InputContext';
import { GET_DATA, ERROR } from '../contexts/JobsTypes';

const JobsProvider = props => {
	const { description, location, fulltime } = useContext(InputContext);
	const initialState = {
		jobs: [],
		loading: true,
		error: '',
	};

	const [state, dispatch] = useReducer(JobsReducer, initialState);

	const { jobs, loading, error } = state;

	const BASE_URL = '/positions.json';

	useEffect(() => {
		
		const cancelToken = axios.CancelToken.source();
		axios
			.get(BASE_URL, {
				params: { markdown: true, description, location, full_time: fulltime },
			})
			.then(res => {
				dispatch({ type: GET_DATA, payload: { jobs: res.data } });
			})
			.catch(err => {
				if (axios.isCancel(err)) return;
				dispatch({ type: ERROR, payload: { error: err } });
			});
		return () => {
			cancelToken.cancel();
		};
	}, [description, location, fulltime]);

	return (
		<JobsContext.Provider
			value={{
				jobs,
				loading,
				error,
			}}
		>
			{props.children}
		</JobsContext.Provider>
	);
};

export default JobsProvider;
