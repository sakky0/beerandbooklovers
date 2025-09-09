import { version } from "../../../package.json";
import "./Footer.css";

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <span>&copy; {year} Klub ljubitelja pive i knjige - Uprise</span>
            <span className="version">v{version}</span>
        </footer>
    );
};

export default Footer;
