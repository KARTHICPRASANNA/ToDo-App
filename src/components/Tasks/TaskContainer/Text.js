import { Box } from '@mui/material';
import { React } from 'react';

const Text = (context) => {
	const { data: task } = context;

	return (
		<Box
			className="taskText"
		>
			{task.name}
		</Box>);
};

export default Text;
