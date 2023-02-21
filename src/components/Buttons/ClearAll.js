import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../services/TodoManager';

const ClearAll = (context) => {
	const { state, setState } = context;

	return (
		<Button
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
