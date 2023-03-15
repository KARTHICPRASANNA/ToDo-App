import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';
import ClearAllIcon from '@mui/icons-material/ClearAll';

const ClearAll = (context) => {
	const { state, setState } = context;
	const { todoList } = state;

	return (
		<Button
			disabled={ !todoList.some((todo) => todo.isActive) }
			variant="contained"
			color="error"
			onClick={ () => setState({
				...state,
				todoList: TodoManager.clearAll(context),
			}) }
		>
			<ClearAllIcon/>ClearAll
		</Button>
	);
};

export default ClearAll;
