import { rndString } from '@laufire/utils/random';

const addTodoId = ({ state: { text }, config: { idLength }}) => ({
	...text,
	name: text,
	id: rndString(idLength),
});

const removeTodo = (context) => {
	const { state: { todoList }, data: todo } = context;

	return todoList.filter((list) => list.id !== todo.id);
};

const TodoManager = {
	addTodoId,
	removeTodo,
};

export default TodoManager;
