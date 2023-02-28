import { Box } from '@mui/material';
import { React } from 'react';
import TaskAdd from './TaskAdd';
import TaskDelete from './TaskDelete';

const TaskContainer = (context) => {
	const { state: { taskList }} = context;

	return taskList.map((task, key) =>
		<Box
			key={ key }
		>
			<Box
				className="taskText"
			>{task.name}</Box>
			<TaskAdd { ...{ ...context, data: task } }/>
			<TaskDelete { ...{ ...context, data: task } }/>
		</Box>);
};

export default TaskContainer;
