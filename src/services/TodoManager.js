import { rndString } from '@laufire/utils/random';

const addTodoId = ({ state: { text }, config: { idLength }}) => ({
	...text,
	name: text,
	id: rndString(idLength),
	isActive: false,
});

const removeTodo = (context) => {
	const { state: { todoList }, data: todo } = context;

	return todoList.filter((data) => data.id !== todo.id);
};

const toggleIsActive = (context) => {
	const { state: { todoList }, data } = context;

	return todoList.map((todo) => {
		const { isActive } = todo;

		return todo.id === data.id ? { ...todo, isActive: !isActive } : todo;
	});
};

const clearAll = (context) => {
	const { state: { todoList }} = context;

	return todoList.filter((data) => data.isActive === false);
};

const selectAll = (context) => {
	const { state: { todoList }, checked } = context;

	return todoList.map((todo) => ({ ...todo, isActive: checked }));
};

const updateTodo = (context) => {
	const { state: { text, todoList, editedTodo }} = context;

	return todoList.map((todo) =>
		(todo.id === editedTodo.id ? { ...todo, name: text } : todo));
};

const TodoManager = {
	addTodoId,
	removeTodo,
	toggleIsActive,
	clearAll,
	selectAll,
	updateTodo,
};

export default TodoManager;
