import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../services/TodoManager';

const ClearAll = (context) => {
	const { state, setState } = context;
	const { todoList } = state;

	return (
		<Button
			disabled={ !todoList.some((todo) => todo.isActive) }
			variant="contained"
			color="error"
			className="clearAll"
			style={ { display: 'block' } }
			onClick={ () => setState({
				...state,
				todoList: TodoManager.clearAll(context),
			}) }
		>
			ClearAll
		</Button>
	);
};

export default ClearAll;
