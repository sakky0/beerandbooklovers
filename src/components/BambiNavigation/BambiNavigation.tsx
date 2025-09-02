/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { CircleMenu, CircleMenuItem, TooltipPlacement } from "react-circular-menu";
import LiteratureLogo from "../../assets/literature.svg?react";
import ConstitutionLogo from "../../assets/constitution.svg?react";
import AboutLogo from "../../assets/about.svg?react";
import "./BambiNavigation.css";

const navItems = [
    { name: "Literatura", icon: <LiteratureLogo /> },
    { name: "Statut", icon: <ConstitutionLogo /> },
    { name: "O klubu", icon: <AboutLogo /> },
];

const BambiNavigation = () => {
    const [active, setActive] = useState(false);

    const closeMenuIfOpened = () => {
        if (active) setActive(false);
    };

    return (
        <div id="bambi-nav" className={active ? "active" : undefined}>
            <img src="bambi-logo.png" alt="Bambi Logo" className="logo" />
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
                menuToggleElement={<div/>}
                onMenuToggle={closeMenuIfOpened}
            >
                {navItems.map(i => (
                    <CircleMenuItem
                        className="nav-item"
                        key={i.name}
                        tooltip={i.name}
                        tooltipPlacement={TooltipPlacement.Right}
                    >
                        {i.icon}
                    </CircleMenuItem>
                ))}
            </CircleMenu>
        </div>
    );
};

export default BambiNavigation;
