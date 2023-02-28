import { rndString, rndValue } from '@laufire/utils/random';

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

	return todoList.filter((data) => !data.isActive);
};

const selectAll = (context) => {
	const { state: { todoList }, checked } = context;

	return todoList.map((todo) => ({ ...todo, isActive: checked }));
};

const isChecked = (context) => {
	const { state: { todoList }} = context;

	return todoList.length
					&& todoList.every((todo) => todo.isActive);
};

const updateTodo = (context) => {
	const { state: { text, todoList, editedTodo }} = context;

	return todoList.map((todo) =>
		(todo.id === editedTodo.id ? { ...todo, name: text } : todo));
};

const filter = {
	all: ({ state: { todoList }}) => todoList,
	active: ({ state: { todoList }}) =>
		todoList.filter((todo) => !todo.isActive),
	completed: ({ state: { todoList }}) =>
		todoList.filter((todo) => todo.isActive),
};

const getTask = ({ config: { idLength }, data: task }) => ({
	name: task,
	id: rndString(idLength),
});

const getTaskListId = (context) => {
	const { config: { tasks }} = context;

	return tasks.map((task) => getTask({ ...context, data: task }));
};

const removeTask = (context) => {
	const { state: { taskList }, data: task } = context;

	return taskList.filter((ele) => ele.id !== task.id);
};

const autoTaskGenerator = (context) => {
	const { setState, config: { timeInterval, tasks }} = context;

	setInterval(() => setState((prevState) => {
		const { taskList, autoTaskGenLimit } = prevState;

		return {
			...prevState,
			taskList: taskList.length < autoTaskGenLimit
				? [...taskList, getTask({ ...context,
					data: rndValue(tasks) })]
				: taskList,
		};
	}), timeInterval);
};

const TodoManager = {
	addTodoId,
	removeTodo,
	toggleIsActive,
	clearAll,
	selectAll,
	updateTodo,
	isChecked,
	getTaskListId,
	removeTask,
	autoTaskGenerator,
	filter,
};

export default TodoManager;
