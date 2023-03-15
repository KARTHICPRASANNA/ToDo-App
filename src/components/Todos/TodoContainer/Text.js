import { Box } from '@mui/material';
import { React } from 'react';

const Text = (context) => {
	const { state, setState, data: todo } = context;

	return (
		<Box
			className="text"
			onClick={ () => setState({
				...state,
				text: todo.name,
				editedTodo: todo,
			}) }
		>
			{todo.name}
		</Box>);
};

export default Text;
