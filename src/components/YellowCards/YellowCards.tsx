import "./YellowCards.css";

export type IYellowCards = { cards?: number };

const YellowCards = ({ cards }: IYellowCards) => {
    if (!cards) return;

    const cardElements = [];
    for (let i = 0; i < cards; i++) {
        cardElements.push(<div key={i} className="yellow-card" />);
    }

    return <div className="yellow-cards-container">{cardElements}</div>;
};

export default YellowCards;
