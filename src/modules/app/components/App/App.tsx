// import styles from './app.module.scss';
// import { clsx } from 'clsx';
import { trashService } from '~/shared/services';
import { Home } from '~/home/pages/Home.pages'
export const App = () => {

	// YOUR TRASH
	console.log(trashService.getTrashItems());

	return (
		<>
			<Home />
		</>
	);
};

