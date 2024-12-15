import { FormContainer } from './components/Form/formContainer';
import { TodosContainer } from './components/Todos/todosContainer';
import { ChangeBlockContainer } from './components/ChangeFormBlock/changeBlockContainer';

import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<h1>Todo list</h1>
			<FormContainer />
			<TodosContainer />
			<ChangeBlockContainer />
		</div>
	);
};
