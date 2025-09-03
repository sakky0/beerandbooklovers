import FancyContainer from "../../components/FancyContainer/FancyContainer";
import "./Constitution.css";

const Constitution = () => {
    return (
        <FancyContainer>
            <h3>I. OPĆE ODREDBE</h3>
            <h4>Čanak 1.</h4>
            <p>
                Klub ljubitelja Pive & Knjige (u daljnjem tekstu: Klub) osnovan je kao udruga osoba
                koje dijele zajedničku strast prema čitanju knjiga i uživanju u pivi, ne nužno tim
                redoslijedom. Klub djeluje na temelju načela slobodne volje, međusobnog uvažavanja i
                zajedničkog sudjelovanja u aktivnostima.
            </p>
            <h4>Članak 2.</h4>
            <p>
                Sjedište Kluba i adresa sastajanja određuje se odlukom osnivača i može se mijenjati
                isključivo odlukom predviđenom ovim Statutom.
            </p>

            <h3>II. OSNIVAČI I UPRAVLJANJE KLUBOM</h3>
            <h4>Članak 3.</h4>
            <p className="no-margin">
                Klub su osnovala četiri člana (u daljnjem tekstu: Osnivači), koji imaju apsolutnu
                upravlja ku moć nad Klubom. Osnivači su:
            </p>
            <ul>
                <li>Irena Kinder</li>
                <li>Josip Nimac </li>
                <li>Filip Sakač</li>
                <li>Filip Škoda</li>
            </ul>
            <h4>Članak 4.</h4>
            <p>
                Sva ključna pitanja i odluke vezane za djelovanje Kluba, uključujući promjene ovog
                Statuta, donose se jednoglasno od strane svih Osnivača.
            </p>
        </FancyContainer>
    );
};

export default Constitution;
