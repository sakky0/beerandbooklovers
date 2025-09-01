import { useMemo } from "react";
import "./CornerDecor.css";

export interface ICornerDecor {
    all?: boolean;
    topLeft?: boolean;
    topRight?: boolean;
    bottomLeft?: boolean;
    bottomRight?: boolean;
    size?: number;
}

const CornerDecor = ({
    all = false,
    topLeft = false,
    topRight = false,
    bottomLeft = false,
    bottomRight = false,
    size = 60,
}: ICornerDecor) => {
    const positions = useMemo(() => {
        const classes = [];
        if (all) return ["top-left", "top-right", "bottom-left", "bottom-right"];
        if (topLeft) classes.push("top-left");
        if (topRight) classes.push("top-right");
        if (bottomLeft) classes.push("bottom-left");
        if (bottomRight) classes.push("bottom-right");
        return classes;
    }, [all, topLeft, topRight, bottomLeft, bottomRight]);

    return (
        <>
            {positions.map((p, i) => (
                <img
                    key={i}
                    src="corner-decoration.png"
                    className={`corner-decor ${p}`}
                    width={size}
                    height={size}
                />
            ))}
        </>
    );
};

export default CornerDecor;
