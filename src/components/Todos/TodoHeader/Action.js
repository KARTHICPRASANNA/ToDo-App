import { React } from 'react';
import Add from './Add';
import Update from './Update';

const Action = (context) => {
	const { state: { editedTodo }} = context;

	return editedTodo ? <Update { ...context }/> : <Add { ...context }/>;
};

export default Action;
