import styles from '../../App.module.css';
import { useSelector } from 'react-redux';
import { selectGetTodos } from '../../selectors';

export const TodosLayout = (props) => {
	const todos = useSelector(selectGetTodos);

	const { loader, handlerDelete, handlerChangeContent } = props;

	return (
		<div className={styles.todo}>
			{loader ? (
				<div className={styles.loader}></div>
			) : (
				<ul className={styles['todo__list']}>
					{todos.map(({ id, title }) => (
						<li className={styles['todo__list-item']} key={id}>
							{title}
							<button
								type="button"
								onClick={() => {
									handlerDelete(id);
								}}
								className={styles['btn']}
							>
								Удалить
							</button>
							<button
								className={styles['btn']}
								onClick={() => {
									handlerChangeContent(id);
								}}
							>
								Изменить
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
