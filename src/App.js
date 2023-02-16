import { React, useState } from 'react';
import './App.scss';
import Add from './components/Buttons/Add';
import Container from './components/Container';
import Input from './components/Input';

const getInitialState = () => ({
	text: '',
	todoList: [],
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<Input { ...extendedContext }/>
			<Add { ...extendedContext }/>
			<Container { ...extendedContext }/>
		</div>
	);
};

export default App;
