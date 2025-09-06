/// <reference types="vite-plugin-svgr/client" />
import LiteratureLogo from "../assets/literature.svg?react";
import ConstitutionLogo from "../assets/constitution.svg?react";
import AboutLogo from "../assets/about.svg?react";

export const navgationItems = [
    { name: "Literatura", icon: <LiteratureLogo />, link: "/" },
    { name: "Statut", icon: <ConstitutionLogo />, link: "/constitution" },
    { name: "O klubu", icon: <AboutLogo />, link: "/about" },
];
