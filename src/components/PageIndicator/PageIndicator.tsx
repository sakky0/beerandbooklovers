import { useLocation } from "react-router-dom";
import { navgationItems } from "../../helpers/navigationHelper";
import "./PageIndicator.css";

const pageTitles = new Map();
pageTitles.set("/literature", "Literatura");
pageTitles.set("/constitution", "Statut");
pageTitles.set("/about", "O klubu");

const getTitle = (location: string) => {
    return pageTitles.has(location) ? pageTitles.get(location) : "Literatura";
};

const getIcon = (location: string) => {
    let navItem = navgationItems.filter(i => i.link === location)?.[0] ?? navgationItems[0];
    return navItem.icon;
};

const PageIndicator = () => {
    let location = useLocation();

    return (
        <div className="page-indicator">
            <h2>{getTitle(location.pathname)}</h2>
            {getIcon(location.pathname)}
        </div>
    );
};

export default PageIndicator;
