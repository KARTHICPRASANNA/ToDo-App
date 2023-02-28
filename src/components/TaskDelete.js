import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../services/TodoManager';

const TaskDelete = (context) => {
	const { state, setState } = context;

	return (
		<Button
			variant="contained"
			color="error"
			onClick={ () => setState({
				...state,
				taskList: TodoManager.removeTask(context),
			}) }
		>
			*
		</Button>
	);
};

export default TaskDelete;
