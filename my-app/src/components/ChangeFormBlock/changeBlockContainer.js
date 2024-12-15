import { useDispatch, useSelector } from 'react-redux';
import {
	setChangeFlag,
	setChangeInput,
	setChangeTodo,
	setLoader,
	setChangeDisabled,
} from '../../actions';
import { selectChangeInput, selectChangeId } from '../../selectors';
import { ChangeBlockLayout } from './changeBlockLayout';

export const ChangeBlockContainer = () => {
	const dispatch = useDispatch();
	const inputChange = useSelector(selectChangeInput);
	const id = useSelector(selectChangeId);

	const handlerClose = () => {
		dispatch(setChangeFlag(false));
		dispatch(setChangeInput(''));
	};
	const handlerChange = ({ target }) => {
		dispatch(setChangeInput(target.value));
		target.value
			? dispatch(setChangeDisabled(false))
			: dispatch(setChangeDisabled(true));
	};
	const handlerRefresh = () => {
		dispatch(setChangeTodo(id, inputChange));
		dispatch(setLoader(true));
		dispatch(setChangeFlag(false));
		dispatch(setChangeInput(''));
	};

	return (
		<ChangeBlockLayout
			handlerClose={handlerClose}
			handlerChange={handlerChange}
			handlerRefresh={handlerRefresh}
		/>
	);
};
