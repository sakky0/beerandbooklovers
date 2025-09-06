/// <reference types="vite-plugin-svgr/client" />
import { useLocation, useNavigate } from "react-router-dom";
import { CircleMenu, CircleMenuItem, TooltipPlacement } from "react-circular-menu";
import { navgationItems } from "../../helpers/navigationHelper";
import { useState } from "react";
import MenuLogo from "../../assets/menu.svg?react";
import "./PageNavigation.css";

const pageTitles = new Map();
pageTitles.set("/literature", "Literatura");
pageTitles.set("/constitution", "Statut");
pageTitles.set("/about", "O klubu");

const getTitle = (location: string) => {
    return pageTitles.has(location) ? pageTitles.get(location) : "Literatura";
};

const PageNavigation = () => {
    const [active, setActive] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const onNavClick = (link: string) => {
        setActive(false);
        navigate(link);
    };

    return (
        <nav id="page-indicator" className={active ? "active" : undefined}>
            <h2>{getTitle(location.pathname)}</h2>

            <CircleMenu
                startAngle={175}
                rotationAngle={-95}
                itemSize={2}
                radius={8}
                className="nav-trigger"
                open={active}
                menuToggleElement={<MenuLogo className="nav-trigger" />}
                onMenuToggle={setActive}
            >
                {navgationItems.map(i => (
                    <CircleMenuItem
                        className="nav-item"
                        key={i.name}
                        tooltip={i.name}
                        tooltipPlacement={TooltipPlacement.Left}
                        onClick={() => onNavClick(i.link)}
                    >
                        {i.icon}
                    </CircleMenuItem>
                ))}
            </CircleMenu>
        </nav>
    );
};

export default PageNavigation;
