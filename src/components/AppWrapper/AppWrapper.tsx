import { HashRouter as Router } from "react-router-dom";
import { Toast } from "radix-ui";
import "./AppWrapper.css";

export type IAppWrapper = React.PropsWithChildren;

const AppWrapper = ({ children }: IAppWrapper) => {
    return (
        <Router>
            <Toast.Provider>
                <Toast.Viewport id="toast-viewport" />
                {children}
            </Toast.Provider>
        </Router>
    );
};

export default AppWrapper;
