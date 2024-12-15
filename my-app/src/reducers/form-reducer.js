const initialFormState = {
	input: '',
	searchInput: '',
	disabled: true,
	sortFlag: false,
	searchFlag: false,
};
export const formReducer = (state = initialFormState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'CLEAR_INPUT': {
			return {
				...state,
				input: '',
			};
		}
		case 'SET_INPUT': {
			return {
				...state,
				input: payload,
			};
		}
		case 'SET_INPUT_DISABLED': {
			return {
				...state,
				disabled: payload,
			};
		}
		case 'SET_SEARCH_INPUT': {
			return {
				...state,
				searchInput: payload,
			};
		}
		case 'SET_SORT_FLAG': {
			return {
				...state,
				sortFlag: payload,
			};
		}
		case 'SET_SEARCH_FLAG': {
			return {
				...state,
				searchFlag: payload,
			};
		}
		default:
			return state;
	}
};
