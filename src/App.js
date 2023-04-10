import './App.scss';
import { React, useState } from 'react';
import { Box, Button } from '@mui/material';
import TodoManager from './services/TodoManager';
import TodoList from './components/Todos';
import Tasks from './components/Tasks';
import { peek } from '@laufire/utils/debug';

const App = (context) => {
	const { once, seed, seedOne } = context;
	const [state, setState] = useState(seed);
	const extendedContext = { ...context, state, setState };

	peek(extendedContext);

	once(() => TodoManager.autoTaskGenerator(extendedContext));

	return (
		<Box className="App">
			<TodoList { ...extendedContext }/>
			<Tasks { ...extendedContext }/>
			<Button
				onClick={ () => setState(seedOne) }
			>reset</Button>
		</Box>
	);
};

export default App;
