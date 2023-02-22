import { React, useState } from 'react';
import './App.scss';
import Action from './components/Buttons/Action';
import ClearAll from './components/Buttons/ClearAll';
import Container from './components/Container';
import Input from './components/Input';
import SelectAll from './components/SelectAll';

const getInitialState = () => ({
	text: '',
	todoList: [],
	editedTodo: null,
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<Input { ...extendedContext }/>
			<Action { ...extendedContext }/>
			<SelectAll { ...extendedContext }/>
			<Container { ...extendedContext }/>
			<ClearAll { ...extendedContext }/>
		</div>
	);
};

export default App;
