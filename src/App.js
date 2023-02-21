import { React, useState } from 'react';
import './App.scss';
import Add from './components/Buttons/Add';
import ClearAll from './components/Buttons/ClearAll';
import Container from './components/Container';
import Input from './components/Input';
import SelectAll from './components/SelectAll';

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
			<SelectAll { ...extendedContext }/>
			<Container { ...extendedContext }/>
			<ClearAll { ...extendedContext }/>
		</div>
	);
};

export default App;
