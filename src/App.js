import './App.scss';
import { React, useState } from 'react';
import { Box } from '@mui/material';
import Input from './components/Input';
import Action from './components/Buttons/Action';
import SelectAll from './components/SelectAll';
import ClearAll from './components/Buttons/ClearAll';
import Tabs from './components/Tabs';
import TaskContainer from './components/TaskContainer';
import TodoManager from './services/TodoManager';

const getInitialState = () => ({
	text: '',
	todoList: [],
	editedTodo: null,
	filter: 'all',
	taskList: [],
	autoTaskGenLimit: 5,
});

const App = (context) => {
	const { once } = context;
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	once(() => TodoManager.autoTaskGenerator(extendedContext));

	return (
		<Box className="App">
			<Input { ...extendedContext }/>
			<Action { ...extendedContext }/>
			<SelectAll { ...extendedContext }/>
			<Tabs { ...extendedContext }/>
			<ClearAll { ...extendedContext }/>
			<TaskContainer { ...extendedContext }/>
		</Box>
	);
};

export default App;
