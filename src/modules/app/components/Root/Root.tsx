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
                    path: HOME_ROUTE.path,
                    element: HOME_ROUTE.element,
                },
                {
                    path: CALENDAR_ROUTE.path,
                    element: CALENDAR_ROUTE.element,
                },
                {
                    path: MAP_ROUTE.path,
                    element: MAP_ROUTE.element,
                },
                {
                    path: RECYCLING_CENTER_ROUTE.path,
                    element: RECYCLING_CENTER_ROUTE.element,
                },
                {
                    path: OPTIONS_ROUTE.path,
                    element: OPTIONS_ROUTE.element,
                },

            ],
        },
    ]);

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={ROUTER} />
        </QueryClientProvider>
    );
};