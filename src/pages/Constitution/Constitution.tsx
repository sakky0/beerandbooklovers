import type { LawDocument } from "../../models/document";
import Article from "../../components/Article/Article";
import { default as test } from "./constitution.json";
import FancyContainer from "../../components/FancyContainer/FancyContainer";

const documents = test as LawDocument[];

const Constitution = () => (
    <>
        {documents.map((d, i) => (
            <Article key={i} {...d} />
        ))}
        <FancyContainer incognito>
            Ova verzija Statuta Kluba ljubitelja Pive & Knjige prilagođena je isključivo za prikaz
            na internetskoj stranici. U slučaju neslaganja ili nejasnoća, službena verzija Statuta,
            ovjerena i pohranjena kod tajnika Kluba, smatra se važećom i ima pravnu prednost.
        </FancyContainer>
    </>
);

export default Constitution;
