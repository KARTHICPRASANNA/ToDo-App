import { TextField } from '@mui/material';
import { React } from 'react';

const Input = (context) => {
	const { state: { text }, setState } = context;

	return (
		<TextField
			class="input"
			type="text"
			placeholder="search"
			value={ text }
			onChange={ (event) => setState((state) => ({
				...state,
				text: event.target.value,
			})) }
		/>);
};

export default Input;
