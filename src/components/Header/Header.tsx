import BambiNavigation from "../BambiNavigation/BambiNavigation";
import PageIndicator from "../PageIndicator/PageIndicator";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <BambiNavigation />
            <PageIndicator />
        </header>
    );
};

export default Header;
