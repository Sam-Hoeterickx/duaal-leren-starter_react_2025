import { Outlet } from 'react-router';

//Components
import { NavigationBar } from '~/shared/navigationBar/components/NavigationBar';

export const App = () => {

	return (
		<>
			<NavigationBar />
			<Outlet />
		</>
	);
};

