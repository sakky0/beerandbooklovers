import { useLocation } from "react-router-dom";
import "./PageIndicator.css";

const pageTitles = new Map();
pageTitles.set("/literature", "Literatura");
pageTitles.set("/constitution", "Statut");
pageTitles.set("/about", "O klubu");

const getTitle = (location: string) => {
    return pageTitles.has(location) ? pageTitles.get(location) : "Literatura";
};


const PageIndicator = () => {
    const location = useLocation();

    return (
        <div className="page-indicator">
            <h2>{getTitle(location.pathname)}</h2>
        </div>
    );
};

export default PageIndicator;
