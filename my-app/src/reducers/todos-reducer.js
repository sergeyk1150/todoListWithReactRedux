const initialTodosState = {
	todos: [],
	id: '',
	loader: false,
};
export const todosReducer = (state = initialTodosState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_LOADER': {
			return {
				...state,
				loader: payload,
			};
		}
		case 'SET_GET_TODOS': {
			return {
				...state,
				todos: payload,
			};
		}
		case 'SET_TODOS': {
			return {
				...state,
				todos: payload,
			};
		}
		default:
			return state;
	}
};
