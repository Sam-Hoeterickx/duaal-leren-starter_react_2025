import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {App} from '~/app';

const queryClient = new QueryClient()

export const Root = () => {
    return(
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    )
};
