import './App.scss';
import { React, useState } from 'react';
import { Box } from '@mui/material';
import TodoManager from './services/TodoManager';
import TodoList from './components/Todos';
import Tasks from './components/Tasks';

const getInitialState = () => ({
	text: '',
	todoList: [],
	editedTodo: null,
	filter: 'all',
	taskList: [],
	autoTaskGenLimit: 10,
});

const App = (context) => {
	const { once } = context;
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	once(() => TodoManager.autoTaskGenerator(extendedContext));

	return (
		<Box className="App">
			<TodoList { ...extendedContext }/>
			<Tasks { ...extendedContext }/>
		</Box>
	);
};

export default App;
