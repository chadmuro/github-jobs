import { GET_DATA, ERROR } from './JobsTypes';

export const JobsReducer = (state, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				loading: false,
				jobs: action.payload.jobs,
				error: null,
			};
		case ERROR:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				jobs: [],
			};
		default:
			return state;
	}
};
