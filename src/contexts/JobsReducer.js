import { GET_DATA, ERROR, UPDATE_HAS_NEXT_PAGE } from './JobsTypes';

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
		case UPDATE_HAS_NEXT_PAGE:
			return {
				...state,
				hasNextPage: action.payload.hasNextPage,
			};
		default:
			return state;
	}
};
