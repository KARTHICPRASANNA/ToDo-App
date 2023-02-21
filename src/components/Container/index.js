import { Box } from '@mui/material';
import { React } from 'react';
import Delete from '../Buttons/Delete';
import CheckBox from '../CheckBox';

const Container = (context) => {
	const { state, setState } = context;
	const { todoList } = state;

	return todoList.map((todo, key) =>
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
				}) }
			>{todo.name}</Box>
			<Delete { ...{ ...context, data: todo } }/>
		</Box>);
};

export default Container;
