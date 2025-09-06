import { useState, useMemo } from "react";
import classNames from "classnames";
import "./BambiLogo.css";

const BambiLogo = () => {
    const [active, setActive] = useState(false);
    const [hovered, setHovered] = useState(false);
    const className = useMemo(() => classNames({ active, hovered }), [active, hovered]);

    return (
        <div id="bambi-logo" className={className}>
            <img src="bambi-logo.png" alt="Bambi Logo" className="logo" />
            <div className="border" />
            <div
                className="button"
                onClick={() => setActive(a => !a)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
            <img src="halo.png" alt="Halo" className="halo" />
            <img src="halo.png" alt="Halo" className="halo" />
        </div>
    );
};

export default BambiLogo;
