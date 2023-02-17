import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import Delete from '../Buttons/Delete';

const Container = (context) => {
	const { state, setState } = context;
	const { todoList } = state;

	return todoList.map((todo, key) =>
		<Box
			key={ key }
			className="container"
		>
			<Checkbox/>
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
