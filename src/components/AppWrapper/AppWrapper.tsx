import { HashRouter as Router } from "react-router-dom";
import { Toast } from "radix-ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./AppWrapper.css";

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
            <Router>
                <Toast.Provider>
                    <Toast.Viewport id="toast-viewport" />
                    {children}
                </Toast.Provider>
            </Router>

            <ReactQueryDevtools buttonPosition="bottom-right" />
        </QueryClientProvider>
    );
};

export default AppWrapper;
