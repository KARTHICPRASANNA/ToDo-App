import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';
import AddTaskIcon from '@mui/icons-material/AddTask';

const Add = (context) => {
	const { state, setState } = context;
	const { text, todoList } = state;

	return (
		<Button
			disabled={ text === '' }
			variant="contained"
			onClick={ () => setState({
				...state,
				todoList: [...todoList, TodoManager.addTodoId(context)],
				text: '',
			}) }
		>
			<AddTaskIcon/>
		</Button>
	);
};

export default Add;
