import styles from './app.module.scss';
import { clsx } from 'clsx';

export const App = () => {

	return (
		<div className={
			clsx(styles['p-home'])
		}>
			<div className={styles[
				'p-home__container'
				]}>
				<h1 className={
					clsx(styles['p-home__container__title'])
				}>Welcome to the app! 🚀</h1>
				<div
					className={
						clsx(styles['p-home__container__gif'])
					}
				></div>
			</div>
		</div>
	);
};

