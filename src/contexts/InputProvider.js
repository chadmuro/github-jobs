import React, { useState } from 'react';
import InputContext from './InputContext';

const InputProvider = props => {
	const [description, setDescription] = useState('');
	const [location, setLocation] = useState('');
	const [fulltime, setFulltime] = useState(false);
	const [page, setPage] = useState(1);

	return (
		<InputContext.Provider
			value={{
				description,
				location,
				fulltime,
				page,
				setDescription,
				setLocation,
				setFulltime,
				setPage,
			}}
		>
			{props.children}
		</InputContext.Provider>
	);
};

export default InputProvider;
