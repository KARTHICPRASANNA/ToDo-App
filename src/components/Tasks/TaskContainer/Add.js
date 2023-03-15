import { React } from 'react';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TodoManager from '../../../services/TodoManager';

const Add = (context) => {
	const { state, setState, data: task } = context;
	const { todoList } = state;

	return (
		<Button
			color="success"
			size="small"
			onClick={ () => setState({
				...state,
				todoList: [...todoList, { ...task, isActive: false }],
				taskList: TodoManager.removeTask(context),
			}) }
		>
			<AddCircleIcon/>
		</Button>
	);
};

export default Add;
