export const setDeleteTodo = (id) => async (dispatch) => {
	return fetch(`http://localhost:3003/todos/${id}`, {
		method: 'DELETE',
	})
		.then((responce) => {
			if (!responce.ok) {
				throw new Error('ошибка сервера');
			}
		})
		.catch((error) => {
			console.error(error);
		});
};
