import { Box } from '@mui/material';
import { React } from 'react';
import ClearAll from './ClearAll';

const TodoFooter = (context) =>
	<Box className="clearAll">
		<ClearAll { ...context }/>
	</Box>;

export default TodoFooter;
