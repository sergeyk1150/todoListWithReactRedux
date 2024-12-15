import styles from '../../App.module.css';

export const FormLayout = ({
	handlerChange,
	input,
	searchInput,
	disabled,
	handlerSearchInput,
	handlerSortContent,
	handlerAddTodos,
}) => {
	return (
		<form className={styles.form}>
			<div className={styles.add}>
				<input onChange={handlerChange} value={input}></input>
				<button
					type="button"
					className={styles['btn']}
					onClick={handlerAddTodos}
					disabled={disabled}
				>
					Добавить задачу
				</button>
			</div>
			<input
				className={styles.input}
				onChange={handlerSearchInput}
				value={searchInput}
				placeholder="поиск"
			></input>
			<label>
				Сортировать по алфавиту
				<input
					type="checkbox"
					className={styles['btn']}
					onClick={handlerSortContent}
				></input>
			</label>
		</form>
	);
};
