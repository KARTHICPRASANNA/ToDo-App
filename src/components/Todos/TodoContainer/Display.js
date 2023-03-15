import { Box } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';
import Delete from './Delete';
import CheckBox from './CheckBox';
import Text from './Text';

const Display = (context) => {
	const { state: { filter }} = context;
	const filteredTodo = TodoManager.filter[filter](context);

	return filteredTodo.map((todo, key) =>
		<Box
			key={ key }
			className="container"
		>
			<CheckBox { ...{ ...context, data: todo } }/>
			<Text { ...{ ...context, data: todo } }/>
			<Delete { ...{ ...context, data: todo } }/>
		</Box>);
};

export default Display;
