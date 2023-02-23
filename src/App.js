import { React, useState } from 'react';
import './App.scss';
import Input from './components/Input';
import Action from './components/Buttons/Action';
import SelectAll from './components/SelectAll';
import Option from './components/Buttons/Option';
import Container from './components/Container';
import ClearAll from './components/Buttons/ClearAll';

const getInitialState = () => ({
	text: '',
	todoList: [],
	editedTodo: null,
	filter: 'all',
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<Input { ...extendedContext }/>
			<Action { ...extendedContext }/>
			<SelectAll { ...extendedContext }/>
			<Option { ...extendedContext }/>
			<Container { ...extendedContext }/>
			<ClearAll { ...extendedContext }/>
		</div>
	);
};

export default App;
