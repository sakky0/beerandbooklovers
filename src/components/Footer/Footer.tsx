import "./Footer.css";

const year = new Date().getFullYear();

const Footer = () => {
    return <footer>&copy; {year} Klub ljubitelja pive i knjige - Uprise</footer>;
};

export default Footer;
