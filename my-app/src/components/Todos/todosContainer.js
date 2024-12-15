import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	setGetTodos,
	setLoader,
	setDeleteTodo,
	setChangeId,
	setChangeFlag,
} from '../../actions';
import { selectLoader, selectSearchInput, selectSortFlag } from '../../selectors';
import { getLoadedTodosOrFilteredTodos } from '../../utils/getLoadedTodosOrFilteredTodos';
import { TodosLayout } from './todosLayout';
export const TodosContainer = () => {
	const dispatch = useDispatch();
	const loader = useSelector(selectLoader);
	const sortFlag = useSelector(selectSortFlag);
	const searchInput = useSelector(selectSearchInput);

	useEffect(() => {
		fetch('http://localhost:3003/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				dispatch(
					setGetTodos(
						getLoadedTodosOrFilteredTodos(loadedTodos, sortFlag, searchInput),
					),
				);
				dispatch(setLoader(false));
			});
	});

	const handlerDelete = (id) => {
		dispatch(setDeleteTodo(id));
		dispatch(setLoader(true));
	};
	const handlerChangeContent = (id) => {
		dispatch(setChangeId(id));
		dispatch(setChangeFlag(true));
	};

	return (
		<TodosLayout
			loader={loader}
			handlerDelete={handlerDelete}
			handlerChangeContent={handlerChangeContent}
		/>
	);
};
