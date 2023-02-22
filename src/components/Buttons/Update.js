import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../services/TodoManager';

const Update = (context) => {
	const { state, setState } = context;

	return (
		<Button
			variant="contained"
			onClick={ () => setState({
				...state,
				todoList: TodoManager.updateTodo(context),
				editedTodo: null,
				text: '',
			}) }
		>
			Update
		</Button>
	);
};

export default Update;
