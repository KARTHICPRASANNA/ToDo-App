import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import TodoManager from '../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;
	const { todoList } = state;

	return (
		<Box
			className="selectAll"
		>
			<Checkbox
				checked={ todoList.length
					&& todoList.every((todo) => todo.isActive) }
				onClick={ ({ target: { checked }}) => setState({
					...state,
					todoList: TodoManager.selectAll({ ...context, checked }),
				}) }
			/>
			SelectAll
		</Box>

	);
};

export default SelectAll;
