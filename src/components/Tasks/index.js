import { Box } from '@mui/material';
import { React } from 'react';
import Display from './TaskContainer/Display';

const Tasks = (context) =>
	<Box className="taskBox">
		<Display { ...context }/>
	</Box>;

export default Tasks;
