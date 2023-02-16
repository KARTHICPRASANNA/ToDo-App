import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../services/TodoManager';
import DeleteIcon from '@mui/icons-material/Delete';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<Button
			variant="contained"
			color="error"
			onClick={ () => setState({
				...state,
				todoList: TodoManager.removeTodo(context),
			}) }
		>
			<DeleteIcon/>
		</Button>
	);
};

export default Delete;
