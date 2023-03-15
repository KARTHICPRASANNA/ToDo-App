import { Box } from '@mui/material';
import { React } from 'react';
import Add from './Add';
import Delete from './Delete';
import Text from './Text';

const Display = (context) => {
	const { state: { taskList }} = context;

	return <Box className="taskContainer">
		{ taskList.map((task, key) =>
			<Box
				key={ key }
				className="task"
			>
				<Text { ...{ ...context, data: task } }/>
				<Add { ...{ ...context, data: task } }/>
				<Delete { ...{ ...context, data: task } }/>
			</Box>)}
	</Box>;
};

export default Display;
