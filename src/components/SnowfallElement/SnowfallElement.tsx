import Snowfall from "react-snowfall";

const month = new Date().getMonth() + 1;

const SnowfallElement = () => {
    return month === 12 ? <Snowfall style={{ position: "fixed", zIndex: 20 }} /> : null;
};

export default SnowfallElement;
