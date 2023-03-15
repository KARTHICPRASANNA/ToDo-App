import { React } from 'react';
import { Button } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TodoManager from '../../../services/TodoManager';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<Button
			color="error"
			size="small"
			onClick={ () => setState({
				...state,
				taskList: TodoManager.removeTask(context),
			}) }
		>
			<RemoveCircleIcon/>
		</Button>
	);
};

export default Delete;
