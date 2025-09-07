import { Tooltip, TooltipPlacement } from "react-circular-menu";
import "./Badge.css";

export type IBadge = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & {
    tooltipText?: string;
    tooltipPlacement?: TooltipPlacement;
};

const Badge = ({ tooltipText, tooltipPlacement, children, ...props }: IBadge) => {
    const content = tooltipText ? (
        <Tooltip title={tooltipText} placement={tooltipPlacement}>
            {children}
        </Tooltip>
    ) : (
        <>{children}</>
    );

    return (
        <div {...props} className="badge">
            {content}
        </div>
    );
};

export default Badge;
