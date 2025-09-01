import CornerDecor from "../CornerDecor/CornerDecor";
import "./FancyContainer.css";

export type IFancyContainer = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

const FancyContainer = ({ className, children, ...props }: IFancyContainer) => {
    return (
        <div className="fancy-container" {...props}>
            {children}
            <CornerDecor all></CornerDecor>
        </div>
    );
};

export default FancyContainer;
