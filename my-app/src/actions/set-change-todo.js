export const setChangeTodo = (id, inputChange) => (dispatch) => {
	console.log(id);
	return fetch(`http://localhost:3003/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: `${inputChange}`,
		}),
	}).then((responce) => {
		if (!responce.ok) {
			throw new Error('ошибка сервера');
		}
	});
};
