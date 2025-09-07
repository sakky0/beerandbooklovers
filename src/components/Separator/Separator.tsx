import "./Separator.css";

const Separator = () => {
    return (
        <div className="seperator-container">
            <img src="/line-decoration.png" className="seperator-decorator" />
            <div className="seperator-line" />
            <img src="/line-decoration.png" className="seperator-decorator"/>
        </div>
    );
};

export default Separator;
