import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';
import BackspaceIcon from '@mui/icons-material/Backspace';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<Button
			color="error"
			onClick={ () => setState({
				...state,
				todoList: TodoManager.removeTodo(context),
			}) }
		>
			<BackspaceIcon/>
		</Button>
	);
};

export default Delete;
