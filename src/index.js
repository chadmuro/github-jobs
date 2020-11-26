import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import InputProvider from './contexts/InputProvider';
import JobsProvider from './contexts/JobsProvider';

ReactDOM.render(
	<InputProvider>
		<JobsProvider>
			<App />
		</JobsProvider>
	</InputProvider>,
	document.getElementById('root')
);
