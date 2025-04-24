import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router';

//Route files
import { HOME_ROUTE } from '~/home/home.route.tsx';
import { CALENDAR_ROUTE } from '~/calendar/calendar.route.tsx'
import { MAP_ROUTE } from '~/map/map.route';
import { RECYCLING_CENTER_ROUTE } from '~/recyclingCenter/recyclingCenter.route';

// Components
import { App } from '../App';
import { OPTIONS_ROUTE } from '~/options/options.route';

//i18n
import '../../../../core/i18n/i18n.config';

const queryClient = new QueryClient();

export const Root = () => {
    const ROUTER = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "*",
                    element: <h1>404 Page not found</h1>,
                },
                {
                    path:':lang/',
                    element: <App />,
                    children: [
                        {
                            path: "options",
                            element: OPTIONS_ROUTE.element,
                        },
                        {
                            path: HOME_ROUTE.path,
                            element: HOME_ROUTE.element,
                        },
                    ]
                }
                
                

                //path taal/pagina
                //element return zelfde element
                //schrijf hook zodat je param uit url haalt van de language en zet de language naar die taal

            ],
        },
    ]);

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={ROUTER} />
        </QueryClientProvider>
    );
};