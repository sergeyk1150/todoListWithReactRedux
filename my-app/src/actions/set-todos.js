import { clearInput } from './clear-input';
export const setTodos = (delta) => async (dispatch) => {
	return fetch('http://localhost:3003/todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: `${delta}`,
		}),
	})
		.then((responce) => {
			if (!responce.ok) {
				throw new Error('ошибка сервера');
			}
		})

		.catch((error) => {
			console.error(error);
		})

		.finally(() => dispatch(clearInput));
};
