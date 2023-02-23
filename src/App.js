import { React, useState } from 'react';
import './App.scss';
import Input from './components/Input';
import Action from './components/Buttons/Action';
import SelectAll from './components/SelectAll';
import ClearAll from './components/Buttons/ClearAll';
import Tabs from './components/Tabs';

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
			<Tabs { ...extendedContext }/>
			<ClearAll { ...extendedContext }/>
		</div>
	);
};

export default App;
