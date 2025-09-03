import { useLocation } from "react-router-dom";
import { Toast } from "radix-ui";
import { useState } from "react";
import "./PageIndicator.css";

const pageTitles = new Map();
pageTitles.set("/literature", "Literatura");
pageTitles.set("/constitution", "Statut");
pageTitles.set("/about", "O klubu");

const getTitle = (location: string) => {
    return pageTitles.has(location) ? pageTitles.get(location) : "Literatura";
};

const PageIndicator = () => {
    const [toastOpen, setToastOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="page-indicator" onClick={() => setToastOpen(true)}>
            <h2>{getTitle(location.pathname)}</h2>

            <Toast.Root className="toast" open={toastOpen} duration={2000} onOpenChange={setToastOpen}>
                <Toast.Description>Koristi Bambija za navigaciju po stranici</Toast.Description>
            </Toast.Root>
        </div>
    );
};

export default PageIndicator;
