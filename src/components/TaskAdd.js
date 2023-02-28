import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../services/TodoManager';

const TaskAdd = (context) => {
	const { state, setState, data: task } = context;
	const { todoList } = state;

	return (
		<Button
			variant="contained"
			onClick={ () => setState({
				...state,
				todoList: [...todoList, { ...task, isActive: false }],
				taskList: TodoManager.removeTask(context),
			}) }
		>
			+
		</Button>
	);
};

export default TaskAdd;
