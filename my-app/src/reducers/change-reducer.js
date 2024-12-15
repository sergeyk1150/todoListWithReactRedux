const initialChangeState = {
	id: null,
	inputChange: '',
	changeFlag: false,
	changeDisabled: true,
};
export const changeReducer = (state = initialChangeState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CHANGE_ID': {
			return {
				...state,
				id: payload,
			};
		}
		case 'SET_CHANGE_FLAG': {
			return {
				...state,
				changeFlag: payload,
			};
		}
		case 'SET_CHANGE_INPUT': {
			return {
				...state,
				inputChange: payload,
			};
		}
		case 'SET_CHANGE_DISABLED': {
			return {
				...state,
				changeDisabled: payload,
			};
		}
		default:
			return state;
	}
};
