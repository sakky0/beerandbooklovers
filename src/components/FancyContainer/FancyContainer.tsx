import { useMemo } from "react";
import classNames from "classnames";
import CornerDecor from "../CornerDecor/CornerDecor";
import "./FancyContainer.css";

export type IFancyContainer = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & {
    incognito?: boolean;
};

const FancyContainer = ({ incognito, className, children, ...props }: IFancyContainer) => {
    const newClassName = useMemo(
        () => classNames(["fancy-container", className, { incognito: incognito }]),
        [className]
    );

    return (
        <div className={newClassName} {...props}>
            <div className="content">{children}</div>
            {!incognito && <CornerDecor all></CornerDecor>}
        </div>
    );
};

export default FancyContainer;
