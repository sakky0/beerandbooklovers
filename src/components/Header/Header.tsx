import BambiLogo from "../BambiLogo/BambiLogo";
import PageNavigation from "../PageNavigation/PageNavigation";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <BambiLogo />
            <PageNavigation />
        </header>
    );
};

export default Header;
