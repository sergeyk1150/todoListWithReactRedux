import { FormLayout } from './formLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectInput,
	selectSearchInput,
	selectDisabled,
	selectSortFlag,
} from '../../selectors';
import {
	setInput,
	setDisabled,
	setSearchInput,
	setSortFlag,
	setSearchFlag,
	setTodos,
	setLoader,
} from '../../actions';

export const FormContainer = () => {
	const dispatch = useDispatch();
	const input = useSelector(selectInput);
	const searchInput = useSelector(selectSearchInput);
	const disabled = useSelector(selectDisabled);
	const sortFlag = useSelector(selectSortFlag);

	const handlerChange = ({ target }) => {
		dispatch(setInput(target.value));
		target.value ? dispatch(setDisabled(false)) : dispatch(setDisabled(true));
	};
	const handlerSearchInput = ({ target }) => {
		dispatch(setSearchInput(target.value));
		target.value ? dispatch(setSearchFlag(true)) : dispatch(setSearchFlag(false));
	};
	const handlerSortContent = () => {
		dispatch(setSortFlag(!sortFlag));
	};
	const handlerAddTodos = () => {
		dispatch(setLoader(true));
		dispatch(setTodos(input));
	};

	return (
		<FormLayout
			handlerChange={handlerChange}
			input={input}
			searchInput={searchInput}
			disabled={disabled}
			handlerSearchInput={handlerSearchInput}
			handlerSortContent={handlerSortContent}
			handlerAddTodos={handlerAddTodos}
		/>
	);
};
