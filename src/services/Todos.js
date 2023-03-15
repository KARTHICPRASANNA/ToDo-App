/* eslint-disable no-console */

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((json) => json);

const main = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');

	console.log(data);
};

main();
