import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';

//Components
import { NavigationBar } from '~/shared/navigationBar/components/NavigationBar';
import i18n from '../../../../core/i18n/i18n.config';

export const App = () => {
	const { lang } = useParams<{lang: string}>();
	console.log(lang);
	const navigate = useNavigate();
	
	useEffect(() => {


		if(!lang){
			console.log('nl')

			//navigate is hetzelfde als redirect maar dan react route
			navigate("nl/home");
			return
		}

		if(lang !== "en" && lang !== "nl"){
			
			i18n.changeLanguage("nl");
		}
		i18n.changeLanguage(lang);
	
	}, []);

	

	return (
		<>
			<Outlet />
			<NavigationBar />
		</>
	);
};

