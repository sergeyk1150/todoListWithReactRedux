import styles from '../../App.module.css';
import { useSelector } from 'react-redux';
import {
	selectChangeFlag,
	selectChangeInput,
	selectChangeDisabled,
} from '../../selectors';
export const ChangeBlockLayout = (props) => {
	const changeFlag = useSelector(selectChangeFlag);
	const changeInput = useSelector(selectChangeInput);
	const changeDisabled = useSelector(selectChangeDisabled);
	const { handlerClose, handlerChange, handlerRefresh } = props;

	return (
		<>
			{changeFlag && (
				<div className={styles['change-content']}>
					<label className={styles['change-content__label']}>
						Изменить задачу
					</label>
					<input
						className={styles['change-content__input']}
						onChange={handlerChange}
						value={changeInput}
					></input>
					<button
						className={styles.btn}
						onClick={handlerRefresh}
						disabled={changeDisabled}
					>
						Отправить
					</button>
					<button className={styles.btn} onClick={handlerClose}>
						Закрыть
					</button>
				</div>
			)}
		</>
	);
};
