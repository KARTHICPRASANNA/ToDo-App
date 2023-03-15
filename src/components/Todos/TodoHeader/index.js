import { Box } from '@mui/material';
import { React } from 'react';
import Action from './Action';
import Input from './Input';
import SelectAll from './SelectAll';

const TodoHeader = (context) =>
	<Box className="todoHeader">
		<Input { ...context }/>
		<Action { ...context }/>
		<SelectAll { ...context }/>
	</Box>;

export default TodoHeader;
