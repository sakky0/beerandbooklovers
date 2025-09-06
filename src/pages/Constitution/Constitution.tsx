import Article from "../../components/Article/Article";
import FancyContainer from "../../components/FancyContainer/FancyContainer";
import { useConstitution } from "../../services/dataService";

const Constitution = () => {
    const { isLoading, data: documents } = useConstitution();

    if (isLoading || !documents || documents.length === 0) return null;

    return (
        <>
            {documents.map((d, i) => (
                <Article key={i} {...d} />
            ))}
            <FancyContainer incognito>
                Ova verzija Statuta Kluba ljubitelja Pive & Knjige prilagođena je isključivo za
                prikaz na internetskoj stranici. U slučaju neslaganja ili nejasnoća, službena
                verzija Statuta, ovjerena i pohranjena kod tajnika Kluba, smatra se važećom i ima
                pravnu prednost.
            </FancyContainer>
        </>
    );
};

export default Constitution;
