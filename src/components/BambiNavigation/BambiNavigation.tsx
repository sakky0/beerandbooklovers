/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { CircleMenu, CircleMenuItem, TooltipPlacement } from "react-circular-menu";
import { useNavigate } from "react-router";
import { navgationItems } from "../../helpers/navigationHelper";
import "./BambiNavigation.css";

const BambiNavigation = () => {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const closeMenuIfOpened = () => {
        if (active) setActive(false);
    };

    const onNavClick = (link: string) => {
        setActive(false);
        navigate(link);
    };

    return (
        <div id="bambi-nav" className={active ? "active" : undefined}>
            <img src="bambi-logo.png" alt="Bambi Logo" className="logo" />
            <div className="border" />
            <div className="button" onClick={() => setActive(a => !a)} />
            <img src="halo.png" alt="Halo" className="halo" />
            <img src="halo.png" alt="Halo" className="halo" />

            <CircleMenu
                startAngle={0}
                rotationAngle={90}
                itemSize={2}
                radius={8}
                className="nav-trigger"
                open={active}
                menuToggleElement={<div />}
                onMenuToggle={closeMenuIfOpened}
            >
                {navgationItems.map(i => (
                    <CircleMenuItem
                        className="nav-item"
                        key={i.name}
                        tooltip={i.name}
                        tooltipPlacement={TooltipPlacement.Right}
                        onClick={() => onNavClick(i.link)}
                    >
                        {i.icon}
                    </CircleMenuItem>
                ))}
            </CircleMenu>
        </div>
    );
};

export default BambiNavigation;
