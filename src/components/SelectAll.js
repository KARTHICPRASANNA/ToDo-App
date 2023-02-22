import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import TodoManager from '../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;

	return (
		<Box
			className="selectAll"
		>
			<Checkbox
				checked={ TodoManager.isChecked(context) }
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
