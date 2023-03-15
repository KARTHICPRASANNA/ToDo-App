import { Checkbox } from '@mui/material';
import { Label, FavoriteBorder, Favorite } from '@mui/icons-material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const CheckBox = (context) => {
	const { state, setState, data: todo } = context;

	return (
		<Checkbox
			{ ...Label }
			icon={ <FavoriteBorder/> }
			checkedIcon={ <Favorite/> }
			checked={ todo.isActive }
			onClick={ () => setState({
				...state,
				todoList: TodoManager.toggleIsActive(context),
			}) }
		/>
	);
};

export default CheckBox;
