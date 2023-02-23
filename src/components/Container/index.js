import { Box } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../services/TodoManager';
import Delete from '../Buttons/Delete';
import CheckBox from '../CheckBox';

const Container = (context) => {
	const { state, setState, state: { filter }} = context;
	const filteredTodo = TodoManager.filter[filter](context);

	return filteredTodo.map((todo, key) =>
		<Box
			key={ key }
			className="container"
		>
			<CheckBox { ...{ ...context, data: todo } }/>
			<Box
				className="text"
				onClick={ () => setState({
					...state,
					text: todo.name,
					editedTodo: todo,
				}) }
			>{todo.name}</Box>
			<Delete { ...{ ...context, data: todo } }/>
		</Box>);
};

export default Container;
