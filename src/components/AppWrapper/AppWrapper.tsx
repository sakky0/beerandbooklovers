import { HashRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export type IAppWrapper = React.PropsWithChildren;

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const AppWrapper = ({ children }: IAppWrapper) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>{children}</Router>

            <ReactQueryDevtools buttonPosition="bottom-right" />
        </QueryClientProvider>
    );
};

export default AppWrapper;
