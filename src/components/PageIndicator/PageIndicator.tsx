import { useLocation } from "react-router-dom";
import "./PageIndicator.css";

const pageTitles = new Map();
pageTitles.set("/literature", "Literatura");
pageTitles.set("/constitution", "Statut");
pageTitles.set("/about", "O klubu");

const PageIndicator = () => {
    let location = useLocation();

    const getTitle = () => {
        return pageTitles.has(location.pathname) ? pageTitles.get(location.pathname) : "Literatura";
    };

    return (
        <div className="page-indicator">
            <h2>{getTitle()}</h2>
        </div>
    );
};

export default PageIndicator;
