import { Box } from '@mui/material';
import { React } from 'react';
import Container from './TodoContainer';
import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';

const TodoList = (context) =>
	<Box className="todoBox">
		<TodoHeader { ...context }/>
		<Container { ...context }/>
		<TodoFooter { ...context }/>
	</Box>;

export default TodoList;
